import React, { useState, useEffect } from "react";
import { Modal, VisuallyHidden } from "@telegram-apps/telegram-ui";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ModalHeader } from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
import { FiAlignJustify } from "react-icons/fi";
import { Link as ScrollLink, Events } from "react-scroll"; // Import react-scroll
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoChevronDownCircleSharp } from "react-icons/io5";
import WebApp from "@twa-dev/sdk";

const ModelLink = ({ services, activeCategory, activeSubcategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal open/close
  const [openDropdown, setOpenDropdown] = useState(null); // State to control which dropdown is open
  const [activeLink, setActiveLink] = useState(null); // State to track the active link
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [thems, setThems] = useState("light");
  useEffect(() => {
    setThems(WebApp.colorScheme);
  }, [WebApp.colorScheme]);
  const handleLinkClick = (id, event) => {
    event.stopPropagation();
    setIsModalOpen(false); // Close modal after clicking on the link
    setActiveLink(id); // Set the clicked link as active
  };

  const toggleDropdown = (categoryId) => {
    // Toggle the dropdown for the clicked category
    setOpenDropdown((prev) => (prev === categoryId ? null : categoryId));
  };

  // Automatically open the dropdown when the active category has subcategories, and close if it's not active
  useEffect(() => {
    if (activeCategory) {
      const activeService = services.find(
        (service) => service.id === activeCategory
      );
      if (activeService && activeService.subcategories?.length > 0) {
        setOpenDropdown(activeCategory); // Automatically open the dropdown
      } else {
        setOpenDropdown(null); // Close the dropdown if no active category or no subcategories
      }
    } else {
      setOpenDropdown(null); // Close dropdown if no active category
    }
  }, [activeCategory, services]);

  // Scroll event listener to update the active link when a section becomes visible
  useEffect(() => {
    Events.scrollEvent.register("end", (to) => {
      setActiveLink(to); // Update active link when scroll event ends
    });

    return () => {
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredServices = services.filter(
    (service) => service.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter services by search term
  );

  return (
    <Modal
      header={
        <ModalHeader style={{ backgroundColor: "transparent" }}>
          Service Categories
        </ModalHeader>
      }
      dismissible={true}
      trigger={
        <button className="mx-[6px] py-[11px] px-[7px] text-sm font-medium bg-primary text-white rounded-full transition-all duration-300 active:bg-primary active:opacity-50 focus:outline-none">
          <span className="w-[20px] h-[2px] bg-black block mb-[2px]"></span>
          <span className="w-[20px] h-[2px] bg-black block  mb-[2px]"></span>
          <span className="w-[20px] h-[2px] bg-black block  "></span>
        </button>
      }
      open={isModalOpen} // Control modal state
      onOpenChange={(open) => setIsModalOpen(open)} // Handle modal open/close
      style={{
        backgroundColor: "transparent",
        bottom: "0",
        display: "flex",
        alignContent: "space-between",
        minHeight: "100%",
      }}
    >
      <DialogTitle>
        <VisuallyHidden>Service List</VisuallyHidden>
      </DialogTitle>

      {/* Form for Filtering */}

      <div
        id="genn-ModelLink-all"
        className={` p-4  flex-[1] text-black overflow-scroll  ${
          thems === "light" ? "bg-white" : "bg-[#223242] text-white"
        } `}
      >
        <ul
          id="genn-ModelLink-listall"
          className="space-y-2 h-full flex flex-col"
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <li key={service.id} className="pl-2 pr-2">
                {service.subcategories && service.subcategories.length > 0 ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(service.id)} // Toggle dropdown on button click
                      className={`genn-art-menu-mob-sub text-black  flex items-center w-[100%] cursor-pointer bg-appColor ${
                        activeCategory === service.id
                          ? "font-bold bg-appColor "
                          : ""
                      }`} // Highlight active link
                    >
                      <span className="mr-[7px]">{service.title}</span>
                      {openDropdown === service.id ? (
                        <IoIosArrowDropupCircle />
                      ) : (
                        <IoChevronDownCircleSharp />
                      )}
                    </button>
                    {openDropdown === service.id && (
                      <ul
                        className={`${
                          thems === "light" ? "bg-gray-100" : "bg-[#334659]"
                        } py-1 px-2  rounded m-[10px]`}
                      >
                        {service.subcategories.map((subcategory) => (
                          <li key={subcategory.id} className="p-1 ">
                            <ScrollLink
                              to={subcategory.id} // Target the element with the subcategory.id
                              smooth={true} // Enable smooth scrolling
                              duration={500} // Duration of scroll animation
                              offset={-100} // Optional: Offset the scroll position (e.g., for sticky headers)
                              className={`  ${
                                thems === "light" ? "text-black" : " text-white"
                              }  block cursor-pointer ${
                                activeSubcategory === subcategory.id
                                  ? "font-bold p-[8px] text bg-primary rounded-[10px]"
                                  : ""
                              }`} // Highlight active subcategory
                              onClick={(event) =>
                                handleLinkClick(subcategory.id, event)
                              } // Close modal and set active link on click
                            >
                              {subcategory.title}
                            </ScrollLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <ScrollLink
                    to={service.id} // Target the element with the service.id
                    smooth={true} // Enable smooth scrolling
                    duration={500} // Duration of scroll animation
                    offset={-100} // Optional: Offset the scroll position (e.g., for sticky headers)
                    className={`${
                      thems === "light" ? "text-black" : " text-white"
                    }  block hover:underline cursor-pointer ${
                      activeCategory === service.id
                        ? "font-bold px-[12px] py-[5px] text bg-primary rounded-[10px]"
                        : ""
                    }`} // Highlight active link
                    onClick={(event) => handleLinkClick(service.id, event)} // Close modal and set active link on click
                  >
                    {service.title}
                  </ScrollLink>
                )}
              </li>
            ))
          ) : (
            <li>No services available</li>
          )}
        </ul>
      </div>
    </Modal>
  );
};

export default ModelLink;
