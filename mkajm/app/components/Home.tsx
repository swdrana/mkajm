"use client";

import Image from "next/image";
import Link from "next/link";

const mosqueData = 
{
  mosqueInfo: {
    name: "জামিয়া মসজিদ",
    address: {
      country: "বাংলাদেশ",
      division: "খুলনা", // বিভাগ
      city: "সাতক্ষীরা", // জেলা শহর
      district: "সাতক্ষীরা", // জেলা
      policeStation: "কলারোয়া",
      village: "মুরারিকাটি",
      postOffice: "মুরারিকাটি",
      postCode: 9411,
      street: "১২৩ মসজিদ রোড",
      wardNo: 7,
    },
    contact: {
      memberId: 1,
      phone: "+৮৮০১৭১২৩৪৫৬৭৮",
      email: "info@jamiumosque.bd",
      website: "https://jamiumosque.bd",
    },
    links: {
      googleMapsLink: "https://goo.gl/maps/example",
      facebookLink: "https://www.facebook.com/example",
      twitterLink: "https://twitter.com/example",
      instagramLink: "https://www.instagram.com/example",
      youtubeLink: "https://www.youtube.com/example",
    },
    history:
      "জামিয়া মসজিদটি ১৯৮৫ সালে প্রতিষ্ঠিত হয় এবং এটি স্থানীয় মুসলিম সম্প্রদায়ের জন্য গুরুত্বপূর্ণ ভূমিকা পালন করে আসছে। এখানে নিয়মিত নামাজ আদায়, ইসলামিক শিক্ষা প্রদান এবং সমাজসেবামূলক কার্যক্রম পরিচালিত হয়।",
    location: {
      latitude: 23.746466,
      longitude: 90.376015,
    },
    openingHours: "সকাল ০৮:০০ থেকে সন্ধ্যা ০১:০০",
  },
  facilities: [
    "পুরুষ ও মহিলাদের জন্য আলাদা নামাজের জায়গা",
    "টয়লেট ও অজুর ব্যবস্থা",
    "ইসলামিক পাঠাগার",
  ],

  mosqueMembers: {
    executiveBoard: [
      {
        id: 1,
        name: "মো. আবদুল কাদের",
        designation: "সভাপতি",
        responsibilities: [
          "মসজিদের সকল কার্যক্রম তত্ত্বাবধান",
          "প্রতিবছর বাজেট অনুমোদন",
          "স্থানীয় কমিউনিটির সঙ্গে সমন্বয়",
        ],
        contact: {
          phone: "+৮৮০১৭১২৩৪৫৬৭৮",
          email: "president@jamiumosque.bd",
        },
        joinedDate: "2015-01-01",
      },
      {
        id: 2,
        name: "মো. রাশেদুল ইসলাম",
        designation: "সাধারণ সম্পাদক",
        responsibilities: [
          "মসজিদের দৈনন্দিন কার্যক্রম পরিচালনা",
          "বার্ষিক রিপোর্ট প্রস্তুত করা",
          "কর্মচারীদের সঙ্গে যোগাযোগ",
        ],
        contact: {
          phone: "+৮৮০১৭১২৩৪৫৬৭৯",
          email: "secretary@jamiumosque.bd",
        },
        joinedDate: "2017-03-15",
      },
    ],
    staff: [
      {
        id: 101,
        name: "মাওলানা আব্দুল করিম",
        designation: "ইমাম",
        responsibilities: [
          "নামাজ পরিচালনা",
          "ইসলামিক শিক্ষাদান",
          "কমিউনিটির ধর্মীয় পরামর্শ প্রদান",
        ],
        contact: {
          phone: "+৮৮০১৭১১৪৫৬৭৮৯",
          email: "imam@jamiumosque.bd",
        },
        joinedDate: "2010-05-20",
      },
      {
        id: 102,
        name: "মো. সাইফুল ইসলাম",
        designation: "মুয়াজ্জিন",
        responsibilities: [
          "আজান প্রদান",
          "নামাজের সময়সূচি ঘোষণা",
          "মসজিদের সাউন্ড সিস্টেম পরিচালনা",
        ],
        contact: {
          phone: "+৮৮০১৭১২৩৪৫৬৮০",
        },
        joinedDate: "2012-09-10",
      },
    ],
    volunteers: [
      {
        id: 201,
        name: "মো. ফারুক হাসান",
        designation: "স্বেচ্ছাসেবক",
        responsibilities: [
          "জুম্মার নামাজের সময় লোকজনকে গাইড করা",
          "বিশেষ ইভেন্ট আয়োজন সহায়তা",
        ],
        contact: {
          phone: "+৮৮০১৭১২৩৪৫৬৮১",
          email: "volunteer1@jamiumosque.bd",
        },
        joinedDate: "2018-11-01",
      },
      {
        id: 202,
        name: "মো. রিয়াজ উদ্দিন",
        designation: "স্বেচ্ছাসেবক",
        responsibilities: [
          "মসজিদের পরিচ্ছন্নতা রক্ষণাবেক্ষণ",
          "বিশেষ কার্যক্রমে অংশগ্রহণ",
        ],
        contact: {
          phone: "+৮৮০১৭১২৩৪৫৬৮২",
        },
        joinedDate: "2019-06-15",
      },
    ],
  },
  additionalInfo: {
    building: {
      "কত তলা বিশিষ্ট": 1,
      room: 1,
      ছাদ: "টিনের",
      "অজু খানা": 1,
      toilet: 2,
      "পস্রাব খানা": 2,
      ঈদগাহ: 1,
      "ইমামের ঘর": 1,
      "ইমামের ঘর মসজিদের বাহিরে": true,
      "ইমাম তার পরিবার নিয়ে থাকতে পারবে": true,
      others: "ছায়া শীতল নিরিবিলি পরিবেশ",
    },
    imams: {
      current: [
        {
          mid: 778,
          name: "",
          address: "",
          contact: {
            phone: [],
            email: [],
            others: "",
          },
          aditionalInfo: "",
        },
      ],
      old: [
        {
          mid: 778,
          name: "",
          address: "",
          contact: {
            phone: [],
            email: [],
            others: "",
          },
          aditionalInfo: "",
          from: "2010-05-20",
          to: "2020-05-20",
          findby: "",
          admittedBy: {
            name: "",
            designation: "",
            mId: 454,
          },
        },
        {
          mId: 78,
          from: "2010-05-20",
          to: "2020-05-20",
        },
      ],
    },
    communityServices: [
      "গরীবদের খাদ্য বিতরণ",
      "ইসলামিক শিক্ষার ব্যবস্থা",
      "সামাজিক উন্নয়ন প্রকল্প",
      "বন্যা ও দুর্যোগ সহায়তা",
    ],
  },
  emergencyContacts: [
    {
      type: "ফায়ার সার্ভিস",
      contact: "+৮৮০১২৩৪৫৬৭৮৯০",
    },
  ],
  events: [
    {
      eventId: 1,
      title: "রমজান মাসের ইফতার মাহফিল",
      date: "2024-04-05",
      time: "সন্ধ্যা ৬:০০",
      description: "স্থানীয় মুসলিমদের ইফতারের আয়োজন।",
      organizer: {
        name: "মো. সাইফুল ইসলাম",
        contact: "+৮৮০১৭১২৩৪৫৬৭৮",
      },
    },
  ],financialRecords: {
    donations: [
      {
        donorId: 1,
        name: "মো. আবদুল মালেক",
        amount: 5000,
        date: "2023-12-01",
      },
    ],
    expenses: [
      {
        expenseId: 1,
        description: "মসজিদের মেরামত কাজ",
        amount: 10000,
        date: "2023-12-10",
      },
    ],
    totalIncome: 20000,
    totalExpense: 15000,
    balance: 5000,
  },
  developmentPlans: [
    {
      planId: 1,
      title: "নতুন তিনতলা ভবন নির্মাণ",
      estimatedCost: 5000000,
      completionDate: "2025-12-31",
    },
  ],      
};

export default function Home() {
  return (
    <div className=" bg-[#4A8C2C]">
      <div className=" container mx-auto relative pt-10">
        <center>
          <h1 className=" text-5xl font-bold text-white">
            اللهُمَّ افْتَحْ لِى أَبْوَابَ رَحْمَتِكَ
          </h1>
          <p className=" text-[#e0f7d3]">
            অর্থঃ হে আল্লাহ, আমার জন্য তোমার রহমতের দরজা খুলে দাও।
          </p>
          <p className=" text-[#C3FD9F] py-5 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            praesentium eaque quam veritatis iusto, minus laboriosam.
          </p>
          <Link
            href="/update"
            className="bg-[#C3FD9F] text-[#4A8C2C] font-bold hover:bg-[#4A8C2C] border border-[#C3FD9F] hover:text-[#C3FD9F] py-2 px-6 rounded-md transition-all"
          >
            Explore Now
          </Link>
        </center>

        {/* <Image
          src="/c.png"
          className=" absolute"
          alt="Logo"
          width={100}
          height={100}
        />
        <Image
          src="/cloud-sm.png"
          className=" absolute top-96"
          alt="Logo"
          width={200}
          height={100}
        /> */}
        <div className=" flex justify-between text-white">
          <div>
            <h1 className=" text-xl font-bold">{mosqueData.mosqueInfo.name}</h1>
            <p className=" py-2">
              গ্রামঃ মুরারীকাটি, পোস্টঃ মুরারীকাটি ৯৪১১, কলারোয়া, সাতক্ষীরা।
            </p>
            <table className=" text-white">
              <tr>
                <td>পদবী</td>
                <td>নাম</td>
              </tr>
              <tr>
                <td>সভাপতিঃ</td>
                <td>আসাদুজ্জামান বাচ্চু</td>
              </tr>
              <tr>
                <td>সহ-সভাপতিঃ</td>
                <td></td>
              </tr>
              <tr>
                <td>সেক্রেটারি</td>
                <td>মতিয়ার রহমান</td>
              </tr>
              <tr>
                <td>Row 2, Column 1</td>
                <td>Row 2, Column 2</td>
              </tr>
            </table>
          </div>
          <Image src="/mosquess.png" alt="Logo" width={400} height={100} />
          <table>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
            <tr>
              <td>Row 1, Column 1</td>
              <td>Row 1, Column 2</td>
              <td>Row 1, Column 3</td>
            </tr>
            <tr>
              <td>Row 2, Column 1</td>
              <td>Row 2, Column 2</td>
              <td>Row 2, Column 3</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
