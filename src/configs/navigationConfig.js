import React from "react";
import * as Icon from "react-feather";

import { FcMoneyTransfer } from "react-icons/fc";
import { GiPayMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";

const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/",
  },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Component",
  // },

  {
    id: "userList",
    title: "User List ",
    type: "collapse",
    icon: <Icon.Users color="green" size={20} />,
    children: [
      {
        id: "patientList",
        title: "Patient List",
        type: "item",
        icon: <Icon.Users color="blue" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/userList/patient-list",
      },
      {
        id: "doctorList",
        title: "Doctor List",
        type: "item",
        icon: <Icon.User color="blue" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/userList/doctor-list",
      },
      {
        id: "pharmaList",
        title: "Pharma List",
        type: "item",
        icon: <Icon.Users color="blue" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/userList/pharma-list",
      },
      {
        id: "diagnosticList",
        title: "Diagnostic List",
        type: "item",
        icon: <Icon.User color="blue" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/userList/diagnostic-list",
      },
    ],
  },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Kundli Management",
  // },

  // {
  //   id: "kundlidetail",
  //   title: "Kundli Detail Users",
  //   type: "item",
  //   icon: <Icon.BarChart2 size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/kundlimanage/kundliuserdetail",
  // },

  // {
  //   id: "kundlimatch",
  //   title: "Kundli Match Users",
  //   type: "item",
  //   icon: <Icon.BarChart2 size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/kundlimanage/kundlimatchlist",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Horoscopes",
  // },/
  // {
  //   id: "horoscopes",
  //   title: "Horoscopes",
  //   type: "collapse",
  //   icon: <Icon.Box size={20} />,
  //   children: [
  //     {
  //       id: "horoscopeList",
  //       title: "Horoscope ",
  //       type: "item",
  //       icon: <Icon.FileText size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/horoscopes/horoscopesList",
  //     },

  //     //     {
  //     //       id: "todayHoroscopeList",
  //     //       title: "Today Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/todayshoroscope/todayHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "weeklyHoroscopeList",
  //     //       title: "Weekly Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/weeklyhoroscope/weeklyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "monthlyHoroscopeList",
  //     //       title: "Monthly Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/monthlyhoroscope/monthlyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "yearlyHoroscopeList",
  //     //       title: "Yearly Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/yearlyhoroscope/yearlyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "dailyHoroscopeList",
  //     //       title: "Daily Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/dailyhoroscope/dailyHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "tomorrowHoroscopeList",
  //     //       title: "Tomorrow Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/tomorrowhoroscope/tomorrowHoroscopeList",
  //     //     },

  //     //     {
  //     //       id: "yesterdayHoroscopeList",
  //     //       title: "Yesterday Horoscope",
  //     //       type: "item",
  //     //       icon: <Icon.FileText size={12} />,
  //     //       permissions: ["admin", "editor"],
  //     //       navLink: "/app/horoscopes/yesterdayhoroscope/yesterdayHoroscopeList",
  //     //     },

  //     //     // {
  //     //     //   id: "YearlyHoroscopeList",
  //     //     //   title: "Yearly Horoscope",
  //     //     //   type: "item",
  //     //     //   icon: <Icon.FileText size={20} />,
  //     //     //   permissions: ["admin", "editor"],
  //     //     //   navLink: "/app/horoscopes/yearlyhoroscope/YearlyHoroscopeList",
  //     //     // },
  //   ],
  // },
  // {
  //   id: "horoscopesList",
  //   title: "Horoscopes List44",
  //   type: "item",
  //   icon: <Icon.Box size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/horoscopes/horoscopesList",
  // },

  // {
  //   id: "horoscopeCategoryList",
  //   title: "Horoscope Category",
  //   type: "item",
  //   icon: <Icon.Box size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/horoscopecategory/horoscopeCategoryList",
  // },
  // {
  //   id: "rashimanagement",
  //   title: "Rashi Management",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "rashi",
  //       title: "Rashi List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/rashimanagement/rashi/rashiList",
  //     },
  //     {
  //       id: "rashiHoroscopeList",
  //       title: "Rashi Horoscope List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/rashimanagement/rashihoroscope/rashiHoroscopeList",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Applied Refund",
  // },

  // {
  //   id: "refund applied",
  //   title: "Refund Applied",
  //   type: "item",
  //   icon: <Icon.List color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/ordermanage/refundlist",
  // },

  {
    id: "appmanagement",
    title: "App Management List ",
    type: "collapse",
    icon:  <Icon.Box color="green" size={20} />,
    children: [
      {
        id: "category",
        title: "Category List",
        type: "item",
        icon: <Icon.Aperture color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appmanagement/category-list",
      },
      {
        id: "subcategoryList",
        title: "Sub Category List",
        type: "item",
        icon: <Icon.Aperture color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appmanagement/Subcategory-list",
      },
      // {
      //   id: "diseaseList",
      //   title: "Diseases List",
      //   type: "item",
      //   icon: <Icon.Aperture color="black" size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/appmanagement/disease-list",
      // },
      {
        id: "doctorsuggestecategory",
        title: "Doctor Suggest Categories",
        type: "item",
        icon: <Icon.Aperture color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appmanagement/Dr-suggest-category",
      },
      {
        id: "doctorsuggestesubcategory",
        title: "Doctor Suggest Sub Categories",
        type: "item",
        icon: <Icon.Aperture color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appmanagement/Dr-sub-suggest",
      },
      {
        id: "doctorprescription",
        title: "Doctor Prescription",
        type: "item",
        icon: <Icon.Aperture color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appmanagement/Dr-prescription",
      },
      {
        id: "conversationintake",
        title: "Conversation Intake List",
        type: "item",
        icon: <Icon.MessageCircle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appmanagement/Conversion-list",
      },
    ],
  },


  // {
  //   type: "groupHeader",
  //   groupTitle: "Order Management",
  // },

  {
    id: "appointments",
    title: "Appointments",
    type: "collapse",
    icon: <Icon.Box  color="green"  size={20} />,
    permissions: ["admin", "editor"],
    // navLink: "/app/ordermanage/allorderlist",
    children: [
      {
        id: "pending",
        title: "Pending List",
        type: "item",
        icon: <Icon.Command color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appointments/Pending-list",
      },
      {
        id: "accepted",
        title: "Accepted List",
        type: "item",
        icon: <Icon.Command color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appointments/Accept-list",
      },
      {
        id: "completed",
        title: "Completed List",
        type: "item",
        icon: <Icon.Command color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appointments/Completed-list",
      },
      {
        id: "cancelled",
        title: "Cancelled List",
        type: "item",
        icon: <Icon.Command color="black" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/appointments/Cancelled-list",
      },
    ],
  },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Add Notification",
  // },
  {
    id: "pharmamanagement",
    title: "Pharma Management",
    type: "collapse",
    icon: <Icon.Box  color="green" size={20} />,
    children: [
      {
        id: "category ",
        title: "Category List",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/PharmaManagement/category-list",
      },
      {
        id: "medicine ",
        title: "Medicine List",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/PharmaManagement/Medicine-list",
      },
      {
        id: "order  ",
        title: "Order List",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/PharmaManagement/Order-list",
      },
      {
        id: "medicinestock  ",
        title: "Medicine Stock List",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/PharmaManagement/Medicin-stock-list",
      },
      {
        id: "supplierinvoice  ",
        title: "Supplier Invoice",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/PharmaManagement/supplierinvoicelist",
      },
    ],
  },

  // {
  //   type: "groupHeader",
  //   groupTitle: " Event",
  // },
  // {
  //   id: "EventManagement",
  //   title: "Event Management",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "eventListnew",
  //       title: "Pharma List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/event/addEvent/EventList",
  //     },
  //     {
  //       id: "bookEventListnew",
  //       title: "Book Event List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/event/bookEvent/bookEventList",
  //     },
  //   ],
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "Event",
  // },
  // {
  //   id: "rashimanagementa",
  //   title: "Book Doctors",
  //   type: "collapse",
  //   icon: <Icon.BarChart2 size={20} />,
  //   children: [
  //     {
  //       id: "booked pooja ",
  //       title: "Booked List",
  //       type: "item",
  //       icon: <Icon.Box color="green" size={20} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/event/bookEvent/bookedpoojalist",
  //     },
  //     // {
  //     //   id: "bannerPoojaLista",
  //     //   title: "Doctor List",
  //     //   type: "item",
  //     //   icon: <Icon.Box size={20} />,
  //     //   permissions: ["admin", "editor"],
  //     //   navLink: "/app/event/bennerPooja/bannerPoojaList",
  //     // },
  //     {
  //       id: "pojatyoelost",
  //       title: "Doctor type List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/event/addEvent/EventList",
  //     },
  //     {
  //       id: "bookEventLisat",
  //       title: "Doctor List",
  //       type: "item",
  //       icon: <Icon.Box size={20} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/event/bookEvent/bookEventList",
  //     },
  //   ],
  // },
  // {
  //   id: "socialmedia",
  //   title: "Social Media",
  //   type: "item",
  //   icon: <Icon.Share2 color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/media/socialmedia",
  // },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Add Footer Pages",
  // },
  // {
  //   id: "Add Pages ",
  //   title: "Add Pages",
  //   type: "item",
  //   icon: <Icon.List color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/pageslist",
  // },

  // {
  //   type: "groupHeader",
  //   groupTitle: "User Ticket Question ",
  // },
  // {
  //   id: "askQuestionList",
  //   title: "Patient Question",
  //   type: "item",
  //   icon: <Icon.MessageCircle color="red" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/askQuestionList",
  // },


  {
    id: "diagnosticsmanagement",
    title: "Diagnostics Management",
    type: "collapse",
    icon: <Icon.Box  color="green" size={20} />,
    children: [
      {
        id: "test category  ",
        title: " Test Category List",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/diagnosticmanagement/testcategorylist",
      },
      {
        id: "testlist ",
        title: "Test List",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/diagnosticmanagement/testlist",
      },
      {
        id: "report order   ",
        title: "Report Order List",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/diagnosticmanagement/orderlistdiagno",
      },
      {
        id: "suppliersinvoice  ",
        title: "Suppliers Invoice",
        type: "item",
        icon: <Icon.Circle  color="black" size={10} />,
        permissions: ["admin", "editor"],
        navLink: "/diagnostic/supplierinvoicelistdiag",
      },
    ],
  },
  // {
  //   type: "groupHeader",
  //   groupTitle: "Pharmacy Management",
  // },


  {
    id: "ratinglist",
    title: "Rating and Review",
    type: "collapse",
    icon: <Icon.Star fill="yellow" size={20} />,
    permissions: ["admin", "editor"],
    // navLink: "/app/reviewrating/ratinglist",
    children: [
      {
        id: "doctor reviews ",
        title: "Doctor Reviews",
        type: "item",
        icon: <Icon.Star size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Ratings/Doctor-rating",
      },
      {
        id: "pharma reviews",
        title: "Pharma Reviews",
        type: "item",
        icon: <Icon.Star size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Ratings/Pharma-rating",
      },
      {
        id: "diagnostics reviews",
        title: "Diagnostics Reviews",
        type: "item",
        icon: <Icon.Star size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Ratings/diagnostics-rating",
      },
    ],
  },


  {
    id: "blogmanagement",
    title: "Blog Management",
    type: "collapse",
    icon: <Icon.LifeBuoy  color="black" size={20} />,
    children: [
      {
        id: "categorylist",
        title: "Category List",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Blogmanagement/Category-list",
      },
      {
        id: "add blogs ",
        title: "Add Blogs List",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Blogmanagement/Add-blog-list",
      },
      {
        id: "comments ",
        title: "Comments List",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Blogmanagement/Comments-list",
      },
    ],
  },

  // {
  //   id: "couponlist",
  //   title: "Coupon and offer management",
  //   type: "collapse",
  //   icon: <Icon.Gift color="green" size={20} />,
  //   children: [
  //     {
  //       id: "coupons",
  //       title: "Coupons",
  //       type: "item",
  //       icon: <Icon.Inbox size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //     {
  //       id: "user offer",
  //       title: "User Offer",
  //       type: "item",
  //       icon: <Icon.Inbox size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/Astrologer/Earningreport",
  //     },
  //   ],
  // },

  {
    id: "packagemanagement",
    title: "Packages Management",
    type: "collapse",
    icon: <Icon.Package color="green" size={20} />,
    children: [
      {
        id: "packagelist",
        title: "Package List",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/poojapackage/packageList",
      },
      {
        id: "refer",
        title: "Referral",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/poojapackage/referList",
      },
    ],
  },
  {
    id: "finance",
    title: "Finance Management",
    type: "collapse",
    icon: <Icon.DollarSign color="green" size={20} />,
    children: [
      {
        id: "doctor earning",
        title: "Doctor Earning List",
        type: "item",
        icon: <Icon.DollarSign size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Financemanagement/Doctor-earning",
      },
      {
        id: "pharma earning",
        title: "Pharma Earning",
        type: "item",
        icon: <Icon.DollarSign size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Financemanagement/Pharma-earning",
      },
      {
        id: "diagonistic earning",
        title: "Diagonistic Earning",
        type: "item",
        icon: <Icon.DollarSign size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Financemanagement/Diagnostic-earning",
      },
      {
        id: "admin earning",
        title: "Admin Earning",
        type: "item",
        icon: <Icon.DollarSign size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Financemanagement/Admin-earning",
      },
    ],
  },

  {
    id: "Commissionmanagement",
    title: "Commission Management",
    type: "collapse",
    icon: <FcMoneyTransfer color="" size={20} />,
    children: [
      {
        id: "doctor commision",
        title: "Doctor Commision",
        type: "item",
        icon: <Icon.Briefcase size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/category/commissionmangement/doctorcommission",
      },
      {
        id: "medicine commision",
        title: "Medicine Commision",
        type: "item",
        icon: <Icon.Briefcase size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/category/commissionmangement/pharmacommission",
      },
      {
        id: "diagonistic commision",
        title: "Diagonistic Commision",
        type: "item",
        icon: <Icon.Briefcase size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/category/commissionmangement/diagnosticcommission",
      },
    ],
  },


  {
    id: "Withdrawmanagement ",
    title: "Withdraw Management ",
    type: "collapse",
    icon: <Icon.Database color="green" size={20} />,
    children: [
      {
        id: "userwithdraw",
        title: "User Withdraw",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Withdraw/User-withdraw",
      },
      {
        id: "doctorwithdraw",
        title: "Doctor Withdraw",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Withdraw/Doctor-withdraw",
      },
      {
        id: "pharmawithdraw",
        title: "Pharma Withdraw",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/withdraw/Pharma-withdraw",
      },
      {
        id: "diagnosticwithdraw",
        title: "Diagnostic Withdraw",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/withdraw/Diagnostics-withdraw",
      },
    ],
  },


  {
    id: "Businessmanagement",
    title: "Business management",
    type: "collapse",
    icon: <Icon.Grid  color="green"   size={20} />,
    children: [
      {
        id: "subscription plans",
        title: "Subscription Plans",
        type: "item",
        icon: <Icon.Circle fill="green" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/Businessmanagment/subscriptionplan",
      },
      {
        id: "callComplete",
        title: "Call History",
        type: "item",
        icon: <Icon.PhoneIncoming size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/Businessmanagement/Call-history",
      },
      {
        id: "callreject",
        title: "Videocall History",
        type: "item",
        icon: <Icon.VideoOff size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/callmanagement/videocall",
      },
      {
        id: "chatreport",
        title: "Chat History",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/callmanagement/chatreport",
      },
      {
        id: "live broadcasting history",
        title: "Live Broadcasting History ",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        // navLink: "/app/pagesetup/faq/faqList",
      },
      {
        id: "offlinevisithistory",
        title: "Offline Visit History",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        // navLink: "/app/pagesetup/faq/faqList",
      },
      {
        id: "user wallet history",
        title: "User wallet history",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/Businessmanagment/Userwallethistory",
      },
      {
        id: "doctorwallet history",
        title: "Doctor wallet history",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/productmanager/Businessmanagment/DrWalletrhistory",
      },
      {
        id: "pharma wallet history",
        title: "Pharma wallet history",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        // navLink: "/app/pagesetup/faq/faqList",
      },
      {
        id: "diagonisticswallet history",
        title: "Diagonistics wallet history",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        // navLink: "/app/pagesetup/faq/faqList",
      },
      {
        id: "notifiList",
        title: "Notification",
        type: "item",
        icon: <Icon.List fill="red" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/notification/notifiList",
      },
      // {
      //   id: "chatlist",
      //   title: "All Chats",
      //   type: "item",
      //   icon: <Icon.List color="green" size={20} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/chat/chatList",
      // },
       {
        id: "faqList",
        title: "FAQ",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/faq/faqList",
      },
      {
          id: "patienttickets",
          title: "Patient Tickets",
          type: "item",
          icon: <Icon.MessageCircle color="red" size={12} />,
          permissions: ["admin", "editor"],
          // navLink: "/app/askQuestionList",
        },
    ],
  },

  // {
  //   id: "chatintakelist",
  //   title: "Conversion take List",
  //   type: "item",
  //   icon: <Icon.MessageCircle size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/chatintakeform/chatintakelist",
  // },

  // {
  //   id: "rechargepackage",
  //   title: "Recharge Package",
  //   type: "collapse",
  //   icon: <Icon.Package size={20} />,
  //   children: [
  //     {
  //       id: "allPlan",
  //       title: "All Plan List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/packagemanager/allPlan",
  //     },
  //     {
  //       id: "userrecharge",
  //       title: "Patient Recharge",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/packagemanager/userrecharge",
  //     },
  //     {
  //       id: "packageoffer",
  //       title: "Package Offer",
  //       type: "item",
  //       icon: <Icon.List color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       // navLink: "/app/packagemanager/packageoffer",
  //     },
  //     {
  //       id: "packageoffer",
  //       title: "Subscription",
  //       type: "item",
  //       icon: <Icon.List color="blue" size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/packagemanager/packageoffer",
  //     },
  //   ],
  // },

  // {
  //   id: "packageList",
  //   title: "Package List ",
  //   type: "item",
  //   icon: <Icon.Compass color="green" size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/poojapackage/packageList",
  // },

  // {
  //   id: "discount",
  //   title: "Discount/offer",
  //   type: "item",
  //   icon: <Icon.Percent size={20} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/coupons/couponslist",
  // },

//   {
//     id: "withdrawrequest",
//     title: "Withdraw Request ",
//     type: "item",
//     icon: <GrTransaction color="red" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/withdraw/WithdrawRequest",
//   },
//   {
//     id: "blogmngment",
//     title: "Blog Management",
//     type: "collapse",
//     icon: <Icon.Package color="blue" size={20} />,
//     children: [
//       {
//         id: "blogList",
//         title: "Blog list",
//         type: "item",
//         icon: <Icon.Image size={20} />,
//         permissions: ["admin", "editor"],
//         // navLink: "/app/blogmngment/blog/blogList",
//       },
//       {
//         id: "blogCateList",
//         title: "Blog Category",
//         type: "item",
//         icon: <Icon.Image size={20} />,
//         permissions: ["admin", "editor"],
//         // navLink: "/app/blogmngment/blogCategory/blogCateList",
//       },
//     ],
//   },

//   {
//     id: "commissionset",
//     title: "Commission Set",
//     type: "item",
//     // icon: <Icon.DollarSign size={20} />,
//     icon: <FcMoneyTransfer color="" size={20} />,
//     permissions: ["admin", "editor"],
//     // navLink: "/app/packagemanager/commission",
//   },
//   {
//     id: "commissionforall",
//     title: "My Commission ",
//     type: "item",
//     // icon: <Icon.DollarSign size={20} />,
//     icon: <FcMoneyTransfer color="" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/packagemanager/commissioncall",
//   },
//   {
//     id: "payouts",
//     title: "Payouts",
//     type: "item",
//     icon: <GiPayMoney color="green" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/report/payoutlist",
//   },

//   {
//     id: "transaction",
//     title: "All Transaction",
//     type: "item",
//     icon: <FaRupeeSign color="blue" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/transaction/transactionHistory",
//   },

//   // {
//   //   id: "ratinglist",
//   //   title: "Doctor Rating and Review",
//   //   type: "item",
//   //   icon: <Icon.Star fill="yellow" size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/reviewrating/ratinglist",
//   // },

//   {
//     type: "groupHeader",
//     groupTitle: "Add Videos",
//   },
//   {
//     id: "videoonweb",
//     title: "Add Youtube video",
//     type: "item",
//     icon: <Icon.Video fill="red" color="red" size={20} />,
//     permissions: ["admin", "editor"],
//     navLink: "/app/youtubevideoadd",
//   },
//   // {
//   //   type: "groupHeader",
//   //   groupTitle: "Add Question Package",
//   // },
//   // {
//   //   id: "Addpackage",
//   //   title: "Add Question Package",
//   //   type: "item",
//   //   icon: <Icon.ArrowDownCircle size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/user/addpackage",
//   // },
//   // {
//   //   id: "walletcustom",
//   //   title: "Customer Wallet",
//   //   type: "item",
//   //   icon: <Icon.DollarSign size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/wallet/walletcustom",
//   // },
//   // {
//   //   id: "wallettansaction",
//   //   title: "Wallet Transaction",
//   //   type: "item",
//   //   icon: <Icon.DollarSign size={20} />,
//   //   permissions: ["admin", "editor"],
//   //   navLink: "/app/wallet/wallettransaction",
//   // },

//   {
//     type: "groupHeader",
//     groupTitle: "CMS",
//   },

  {
    id: "pagesetup",
    title: "Page Setup ",
    type: "collapse",
    icon: <Icon.Settings color="green" size={20} />,
    children: [
      {
        id: "bannerList",
        title: "Banner List",
        type: "item",
        icon: <Icon.List fill="red" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/banner/bannerList",
      },
      // {
      //   id: "notifiList",
      //   title: "Notification List",
      //   type: "item",
      //   icon: <Icon.List fill="red" size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/pagesetup/notification/notifiList",
      // },
      // {
      //   id: "contactus",
      //   title: "Contact Us",
      //   type: "item",
      //   icon: <Icon.Circle fill="green" size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/pagesetup/contactus/contactUsList",
      // },
      {
        id: "aboutUsList",
        title: "About Us",
        type: "item",
        icon: <Icon.Circle fill="green" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/aboutus/aboutUsList",
      },
      {
        id: "termsandcondition",
        title: "Terms And Conditions",
        type: "item",
        icon: <Icon.Circle fill="red" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/termscondition/termConditionList",
      },
      // {
      //   id: "faqList",
      //   title: "FAQ List",
      //   type: "item",
      //   icon: <Icon.Circle fill="red" color="red" size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/pagesetup/faq/faqList",
      // },
      {
        id: "privacyPolicyList",
        title: "Privacy Policy",
        type: "item",
        icon: <Icon.Circle fill="red" color="red" size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/pagesetup/privacypolicy/privacyPolicyList",
      },
      {
        id: "advertisement",
        title: "Advertisement",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        // navLink: "/app/helpUs/HelpUs",
      },
    ],
  },
];
export default navigationConfig;