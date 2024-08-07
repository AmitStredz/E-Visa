import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import SvgIcon from '@mui/material/SvgIcon'; // Correct import


import Header from "./header";
import Footer from "./footer";
import img1 from "../assets/applyBanner.jpg";

export default function Faq() {
  const [open, setOpen] = useState("");

  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <Header></Header>

      <div
        className="w-screen h-40 sm:h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
        data-aos="fade-in"
      ></div>

      <div className="w-full flex flex-col justify-center items-center h mb-10">
        <div className="w-full flex flex-col justify-start p-5 sm:p-10 lg:px-40 gap-5 text-black" data-aos="fade-up">
          <div className="flex items-center justify-between w-full mb-10">
            <div className="h-[2px] bg-slate-400 w-full"></div>
            <span className="border border-slate-500 p-2 w-full text-center">
             FREQUENTLY ASKED QUESTIONS
            </span>
            <div className="h-[2px] bg-slate-400 w-full"></div>
          </div>

         
          <section class="mb-8 transition-all">
        <h2 class="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("1")}
          >
            What is an e-visa?
          </h3>
          {open == "1" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                An e-Visa is an official document permitting entry into and
                travel within Türkiye. The e-Visa is an alternative to visas
                issued at Turkish missions and at the ports of entry. Applicants
                obtain their visas electronically after entering required
                information and making payments by a credit or debit card
                (Mastercard, Visa or UnionPay). The link to download your e-Visa
                is given on the final step where you will be informed that your
                application has been completed successfully. In addition, the
                same link to download your e-Visa will be emailed to you.
                Passport control officers at ports of entry can verify your
                e-Visa on their system. However, you are advised to keep your
                e-Visa with you either as a soft copy (tablet PC, smart phone,
                etc.) or as a hard copy in case of any failure on their system.
                As in the case of other visas, respective Turkish officials at
                the ports of entry reserves the right to deny entry into Türkiye
                to a holder of an e-Visa without any explanation.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("2")}
          >
            What do I need for my e-Visa application?
          </h3>
          {open == "2" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                In accordance with the article 7.1b of “the Law on Foreigners
                and International Protection” no.6458, foreigners wishing to
                enter Türkiye must carry a passport or a travel document as a
                substitute for passport with an expiration date at least 60 days
                beyond the “duration of stay” of their visa, e-Visa, visa
                exemption, or residence permit. Depending on your nationality,
                there may be additional requirements. You will be informed of
                these requirements after you select your country of travel
                document and travel dates.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("3")}
          >
            What are the advantages of e-Visa?
          </h3>
          {open == "3" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                An e-Visa can be obtained easily anywhere with an internet
                connection and it saves time that you would otherwise spend on
                visa applications at Turkish missions or at the ports of entry
                into Türkiye (if you are eligible).
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("4")}
          >
            Who is eligible for e-Visa?{" "}
          </h3>
          {open == "4" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Citizens of the countries listed below are eligible for the
                e-Visa provided that they meet required criteria. To find out
                these criteria, go to Main Page, click on Apply button and
                select your Country of Travel and Type of Travel Document.
              </p>
              <p>Here are the countries listed in a structured format:</p>
              <div>
                {/* <ul> */}
                <li>Afghanistan</li>
                <li>Algeria</li>
                <li>Antigua and Barbuda</li>
                <li>Armenia</li>
                <li>Australia</li>
                <li>Bahamas</li>
                <li>Bangladesh</li>
                <li>Barbados</li>
                <li>Bermuda</li>
                <li>Bhutan</li>
                <li>Cambodia</li>
                <li>Cape Verde</li>
                <li>China</li>
                <li>Croatia</li>
                <li>Dominica</li>
                <li>Dominican Republic</li>
                <li>East Timor</li>
                <li>Egypt</li>
                <li>Equatorial Guinea</li>
                <li>Estonia</li>
                <li>Fiji</li>
                <li>Greek Cypriot Administration of Southern Cyprus</li>
                <li>Grenada</li>
                <li>Haiti</li>
                <li>Hong Kong (BN(O))</li>
                <li>India</li>
                <li>Iraq</li>
                <li>Jamaica</li>
                <li>Latvia</li>
                <li>Libya</li>
                <li>Lithuania</li>
                <li>Maldives</li>
                <li>Mauritius</li>
                <li>Mexico</li>
                <li>Nepal</li>
                <li>Pakistan</li>
                <li>Palestine</li>
                <li>Philippines</li>
                <li>Saint Lucia</li>
                <li>Saint Vincent and the Grenadines</li>
                <li>Senegal</li>
                <li>Solomon Islands</li>
                <li>South Africa</li>
                <li>Sri Lanka</li>
                <li>Suriname</li>
                <li>Taiwan</li>
                <li>Vanuatu</li>
                <li>Vietnam</li>
                <li>Yemen</li>
                {/* </ul> */}
              </div>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("5")}
          >
            Do I need to enter Türkiye on the exact date specified in my
            application?
          </h3>
          {open == "5" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                No. The validity period of your e-Visa begins from the date
                specified in your application. You can enter Türkiye on any date
                within this period.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("6")}
          >
            If my travel dates change, can I apply for e-Visa amendment for
            change of date?{" "}
          </h3>
          {open == "6" && (
            <div className="p-3" data-aos="fade-in">
              <p>No. You must obtain another e-Visa.</p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("7")}
          >
            How do you protect the information that I share during my e-Visa
            application process?
          </h3>
          {open == "7" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                The Republic of Türkiye does not sell, rent or otherwise use for
                commercial purposes any personal information entered in the
                e-Visa Application System to third parties. Any information
                obtained at each stage of the application and the e-Visa issued
                at the end of the process are stored in high security systems.
                The applicant bears full responsibility for the safety of the
                soft and hard copies of the e-Visa. The applicant bears again
                full responsibility of this information should it fall into the
                hands of third parties. The barcode on the e-Visa stores
                applicant's information in an encrypted and electronically
                signed form, designated by the Ministry of Foreign Affairs of
                the Republic of Türkiye. Access to the content of the barcode is
                solely provided to the institutions authorized by the Ministry
                of Foreign Affairs of the Republic of Türkiye. The applicant
                bears full responsibility for any inconvenience that may result
                from barcode alterations or forgery caused by the applicant.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("8")}
          >
            Do I need to obtain a separate e-Visa for people accompanying me?{" "}
          </h3>
          {open == "8" && (
            <div className="p-3" data-aos="fade-in">
              <p>Yes. Each traveller must have a seperate e-Visa.</p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("9")}
          >
            Can I get a refund if I do not use my e-Visa?{" "}
          </h3>
          {open == "9" && (
            <div className="p-3" data-aos="fade-in">
              <p>No. We cannot refund payments for unused e-Visas.</p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("10")}
          >
            Can I obtain a multiple-entry e-Visa?
          </h3>
          {open == "10" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Here are the countries whose citizens will obtain a
                multiple-entry e-Visa:
              </p>
              <div>
                {/* <ul> */}
                <li>Antigua and Barbuda</li>
                <li>Armenia</li>
                <li>Australia</li>
                <li>Bahamas</li>
                <li>Barbados</li>
                <li>Bermuda</li>
                <li>China</li>
                <li>Croatia</li>
                <li>Dominica</li>
                <li>Dominican Republic</li>
                <li>Estonia</li>
                <li>Grenada</li>
                <li>Haiti</li>
                <li>Hong Kong (BN(O))</li>
                <li>Jamaica</li>
                <li>Latvia</li>
                <li>Lithuania</li>
                <li>Maldives</li>
                <li>Mauritius</li>
                <li>Saint Lucia</li>
                <li>Saint Vincent and the Grenadines</li>
                <li>South Africa</li>
                <li>Taiwan</li>
                {/* </ul> */}
              </div>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("11")}
          >
            Are there any restrictions on airline companies to fly to Türkiye?
          </h3>
          {open == "11" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                The citizens of the countries listed below are required to
                travel with an airline company which signed a protocol with the
                Turkish Foreign Ministry. At present, the airline companies that
                signed this protocol are Turkish Airlines, Pegasus Airlines,
                Onur Air.
              </p>
              <div>
                <li>Cape Verde</li>
                <li>Egypt</li>
                <li>Equatorial Guinea</li>
                <li>Palenstine</li>
                <li>Senegal</li>
                <li>Vietnam</li>
                <li>Yemen</li>
              </div>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("12")}
          >
            {" "}
            The information on my e-Visa does not fully match the information on
            my travel document. Can I enter Türkiye with this e-Visa?
          </h3>
          {open == "12" && (
            <div className="p-3" data-aos="fade-in">
              <p>No, your e-Visa is invalid. You must obtain another e-Visa.</p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("13")}
          >
            I would like to stay in Türkiye for a period of time longer than the
            e-visa permits. What should I do?{" "}
          </h3>
          {open == "13" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                If you wish to stay in Türkiye longer than your e-Visa permits,
                you must apply at the nearest Provincial Directorate of
                Migration Management for a residence permit. Please note that an
                e-Visa is granted only for tourism and trade purposes.
                Application for other types of visa (work visa, student visa
                etc.) are required to be submitted at Turkish Embassies or
                Consulates. If you overstay your visa, you might be asked to pay
                fines, deported or banned future travel to Türkiye for a
                specific period of time.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("14")}
          >
            Are credit card payments made on the e-Visa web page secure?{" "}
          </h3>
          {open == "14" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Our website maintains high level of security standards. We are
                not responsible for any harm that may result from security
                vulnerabilities of your bank, your computer or your internet
                connection.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("15")}
          >
            {" "}
            I have realized that some of the information that I provided in the
            e-Visa application requires correction. What should I do?{" "}
          </h3>
          {open == "15" && (
            <div className="p-3" data-aos="fade-in">
              <p>You must create a fresh e-Visa application.</p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("16")}
          >
            I have completed my application. When will I obtain my e-Visa?{" "}
          </h3>
          {open == "16" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                The link to download your e-Visa is given on the final step
                where you will be informed that your application has been
                completed successfully. In addition, the same link to download
                your e-Visa will be emailed to you.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("17")}
          >
            {" "}
            I am notified by the system that my e-Visa application cannot be
            processed. What should I do?{" "}
          </h3>
          {open == "17" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                You can visit the nearest Turkish Embassy or Consulate for your
                visa application.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("18")}
          >
            If my e-Visa application is denied, will my payment be refunded?{" "}
          </h3>
          {open == "18" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                The e-Visa application fee is only charged to an approved
                e-Visa.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("19")}
          >
            How long before my travel date should I apply for e-Visa?{" "}
          </h3>
          {open == "19" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                You can apply for your e-Visa any time before your travel.
                However, you are advised to create an e-Visa application at
                least 48 hours before your departure.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("20")}
          >
            {" "}
            I have applied for a visa at a Turkish mission (Embassy's Consular
            Section or Consulate General) and wish to be updated on my
            application. Can I send a request for an update from the e-Visa
            Support Desk?
          </h3>
          {open == "20" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                No. You should contact the respective Embassy or Consulate
                General to get information about your application.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("21")}
          >
            I have realized that some information on my e-Visa does not match
            the information on my travel document. I know that my e-Visa is
            invalid. Can I get a refund?
          </h3>
          {open == "21" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                No. The applicant assumes responsibility for any mistakes made
                in his or her application.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("22")}
          >
            I do not want to apply for an e-Visa. Can I get a visa on arrival?
          </h3>
          {open == "22" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Yes. If you are a citizen of one of the countries listed below
                and you meet the required criteria, you can obtain a visa on
                arrival. Kindly visit the Ministry's website (www.mfa.gov.tr) to
                learn more about these requirements.
              </p>
              <div>
                {/* <ul> */}
                <li>Antigua and Barbuda</li>
                <li>Armenia</li>
                <li>Australia</li>
                <li>Bahamas</li>
                <li>Barbados</li>
                <li>Bermuda</li>
                <li>Cape Verde</li>
                <li>China</li>
                <li>Croatia</li>
                <li>Dominica</li>
                <li>Dominican Republic</li>
                <li>Egypt</li>
                <li>Equatorial Guinea</li>
                <li>Estonia</li>
                <li>Grenada</li>
                <li>Greek Cypriot Administration of Southern Cyprus</li>
                <li>Haiti</li>
                <li>Hong Kong (BN(O))</li>
                <li>Jamaica</li>
                <li>Latvia</li>
                <li>Lithuania</li>
                <li>Maldives</li>
                <li>Mauritius</li>
                <li>Mexico</li>
                <li>Palestine</li>
                <li>Saint Lucia</li>
                <li>Saint Vincent and the Grenadines</li>
                <li>Senegal</li>
                <li>South Africa</li>
                <li>Taiwan</li>
                <li>Vietnam</li>
                <li>Yemen</li>
                {/* </ul> */}
              </div>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("23")}
          >
            I do not have a credit card or debit card. Is there any other way of
            e-Visa fee payment?{" "}
          </h3>
          {open == "23" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                No. You can only make a payment with a credit or debit card
                (only Mastercard, Visa or UnionPay). On the other hand, please
                note that the card does not have to be under your name.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("24")}
          >
            I cannot make a payment. What should I do?{" "}
          </h3>
          {open == "24" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Make sure that the card is either “Mastercard”, “Visa” or
                "UnionPay" (it does not have to be under your name), it has 3D
                Secure System, and is open to international transactions. If
                your card has all of these and you still cannot make a payment,
                you can try making payment at another time or with a different
                card. Please also note that after you receive the “e-mail
                address verification message”, you need to click the “approve”
                button and proceed with the payment within 24 hours. Otherwise,
                your application will time out, the system will not accept
                payment, and you will need to create a new application. If the
                problem persists, you should contact your bank for assistance.
                In case you still cannot make a payment, please contact e-Visa
                Support Desk (Home Page > Contact Us).
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("25")}
          >
            {" "}
            In the "Personal Information" section there is no place for a middle
            name. Where should I enter my middle name?
          </h3>
          {open == "25" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Please enter your middle name right after your name in the
                “Given Name(s)” section with a space in between the two names.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("26")}
          >
            I want the address on my payment receipt to be different than the
            address on my e-Visa application. Is this possible?{" "}
          </h3>
          {open == "26" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                No. The address on your payment receipt is automatically taken
                from your e-Visa.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("27")}
          >
            What does the CVV / CVC / CVC2 number mean?{" "}
          </h3>
          {open == "27" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                CVV / CVC / CVC2 for Visa and MasterCard is the final three
                digits of the number printed on the signature strip on the back
                of your card.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("28")}
          >
            Do I need an e-Visa if I am on a cruise ship?{" "}
          </h3>
          {open == "28" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                According to the Law on Foreigners and International Protection
                which entered into force on 11th April 2014, those foreigners
                who arrive at sea ports and intend to visit the seaport city or
                nearby provinces for touristic purpose are exempt from visa
                provided that their stay does not exceed seventy two (72) hours.
                However, if you arrive in/depart from our country by air for
                your cruise tour, you must obtain a visa.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("29")}
          >
            My child is included in my passport. Do I need to make a separate
            e-Visa application for her/him?
          </h3>
          {open == "29" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Yes. Provided that your child is issued a passport under his/her
                name, please either make a separate e-Visa application or
                contact the nearest Turkish Embassy or Consulate General so as
                to apply for a sticker visa. Beginning from 5 January 2016,
                applications for Turkish visas have to be made through the
                Pre-Application System of Turkish Sticker Visa.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("30")}
          >
            What are the criteria for the validity of my supporting document
            (visa or residence permit from Schengen or from US, UK and Ireland)?{" "}
          </h3>
          {open == "30" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                The only requirement for your visa/residence permit to be used
                as a supporting document is that it should be still valid (by
                date) by the time you enter Türkiye. Previously used or unused
                single-entry visas are accepted as long as their validity date
                covers your entry date to Türkiye. Please note that e-Visas of
                other countries are not accepted as a supporting document.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("31")}
          >
            Can the citizens of all the countries eligible for e-Visa obtain a
            visa on arrival?
          </h3>
          {open == "31" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                No. While the citizens of the countries listed below can obtain
                an e-Visa, they are not eligible for visa on arrival.
              </p>
              <div>
                {/* <ul> */}
                <li>Afghanistan</li>
                <li>Algeria</li>
                <li>Antigua and Barbuda</li>
                <li>Armenia</li>
                <li>Australia</li>
                <li>Bahamas</li>
                <li>Bangladesh</li>
                <li>Barbados</li>
                <li>Bermuda</li>
                <li>Bhutan</li>
                <li>Cambodia</li>
                <li>Cape Verde</li>
                <li>China</li>
                <li>Croatia</li>
                <li>Dominica</li>
                <li>Dominican Republic</li>
                <li>East Timor</li>
                <li>Egypt</li>
                <li>Equatorial Guinea</li>
                <li>Estonia</li>
                <li>Fiji</li>
                <li>Greek Cypriot Administration of Southern Cyprus</li>
                <li>Grenada</li>
                <li>Haiti</li>
                <li>Hong Kong (BN(O))</li>
                <li>India</li>
                <li>Iraq</li>
                <li>Jamaica</li>
                <li>Latvia</li>
                <li>Libya</li>
                <li>Lithuania</li>
                <li>Maldives</li>
                <li>Mauritius</li>
                <li>Mexico</li>
                <li>Nepal</li>
                <li>Pakistan</li>
                <li>Palestine</li>
                <li>Philippines</li>
                <li>Saint Lucia</li>
                <li>Saint Vincent and the Grenadines</li>
                <li>Senegal</li>
                <li>Solomon Islands</li>
                <li>South Africa</li>
                <li>Sri Lanka</li>
                <li>Suriname</li>
                <li>Taiwan</li>
                <li>Vanuatu</li>
                <li>Vietnam</li>
                <li>Yemen</li>
                {/* </ul> */}
              </div>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("32")}
          >
            How much is an e-Visa fee?
          </h3>
          {open == "32" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                e-Visa fee varies according to country of travel document and
                type of travel document. Please, click “Apply” button on the
                homepage and select your country of travel document to find out
                the e-Visa fee that you are required to pay
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("33")}
          >
            How long will my e-Visa be valid for?
          </h3>
          {open == "33" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                The validity period of an e-Visa varies according to Country of
                Travel Document. Go to Main Page, click on Apply button and
                select your Country of Travel and Type of Travel Document to
                check for how many days you are allowed to stay in Turkey
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("34")}
          >
            Do I have to obtain a visa if I do not leave the international
            transit area?
          </h3>
          {open == "34" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                No. You do not have to get a visa if you are not going to leave
                the international transit area.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("35")}
          >
            {" "}
            For how many people can I create a family application?
          </h3>
          {open == "35" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Family applications can be created for minimum of 2 and a
                maximum of 10 applicants.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("36")}
          >
            {" "}
            Are there any criteria for family applications?{" "}
          </h3>
          {open == "36" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Yes, all members of the family must originate from the same
                country; their travel documents must be the same type (e.g.
                normal, official, diplomatic); and their arrival date must be
                the same (Please note that the validity period of e-Visas will
                begin as of the date selected as arrival date. e-Visa holders
                can enter Türkiye on any date within the validity period. In
                other words, all members of the family are not required to enter
                Türkiye on the same day.) In addition, all prerequisites (if
                any) for e-Visa application must be met by all in the family.
              </p>
            </div>
          )}
        </div>

        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("37")}
          >
            {" "}
            How does a family application work?
          </h3>
          {open == "37" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                After you select ‘Country/Region’ of travel document and ‘Date
                of Arrival’, fill up ‘Personal Information’ form for the first
                member of the family, then click ‘Add a New Person’ button to
                add other applicants in your family up to 10 people. Upon
                completing the application of the last member of the family by
                clicking the ‘Continue’ button, the Foreign Ministry will send a
                confirmation e-mail to the provided e-mail address. A lump sum
                payment can be made after this stage. Upon receiving the
                payment, the Foreign Ministry will make the e-Visas available
                for download. If requested, a payment receipt will be issued
                under the name of the first applicant.
              </p>
            </div>
          )}
        </div>
        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("38")}
          >
            For how many people can I create a group application?
          </h3>
          {open == "38" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Group applications can be created for a minimum of 10 and a
                maximum of 300 applicants.
              </p>
            </div>
          )}
        </div>
        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("39")}
          >
            Are there any criteria for group applications?
          </h3>
          {open == "39" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Yes, individuals in a group must originate from the same
                country; their travel documents must be the same type (e.g.
                normal, official, diplomatic); and their arrival date must be
                the same (Please note that the validity period of e-Visas will
                begin as of the date selected as arrival date. e-Visa holders
                can enter Türkiye on any date within the validity period. In
                other words, all individuals in the group are not required to
                enter Türkiye on the same day.) In addition, all prerequisites
                (if any) for e-Visa application must be met by all in the group.
              </p>
            </div>
          )}
        </div>
        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("40")}
          >
            How does a group application work?
          </h3>
          {open == "40" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                When using the e-Visa system, the link to create a group
                application can be found upon selecting the country of origin
                and date of arrival to Türkiye. Group leaders should provide a
                single e-mail address to be used for the group application. The
                Foreign Ministry will then send an sample excel file and a user
                guide to the provided email address. After the list is uploaded,
                the Foreign Ministry will send a confirmation e-mail with a
                link. This link must be clicked on within 1 hours to proceed,
                otherwise the application will time out. A lump sum payment can
                be made after this stage. Upon receiving the payment, the
                Foreign Ministry will make the e-Visas available for download.
                If requested, a payment receipt will be issued under the name of
                the company which applied on behalf of the applicants.
              </p>
            </div>
          )}
        </div>
        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("41")}
          >
            {" "}
            Why is there a service fee?
          </h3>
          {open == "41" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                Service fee is charged to cover the cost for international
                operations.
              </p>
            </div>
          )}
        </div>
        <div class="mb-1">
          <h3
            className="font-semibold bg-black bg-opacity-20 p-2 border border-black cursor-pointer"
            onClick={() => setOpen("42")}
          >
            {" "}
            The duration of 90-day-stay on my e-Visa expired and I have come
            back to my country timely. How many days should be passed until I
            reapply?
          </h3>
          {open == "42" && (
            <div className="p-3" data-aos="fade-in">
              <p>
                If the duration of 90-day-stay on your e-Visa expired within 180
                days as of your first entry date, you can reapply for an e-Visa
                180 days later starting from the first entry date. If you spent
                some part of the duration of 90-day-stay on a multiple entry
                e-Visa within 180 days as of your first entry date and the rest
                expired after 180 days elapsed as of the first entry date, it is
                possible to reapply for an e-Visa. Anyway, please keep in mind
                that you may stay in Türkiye up to 90 days in every 180 days
                starting from the first entry date. May I apply for a new e-Visa
                while I am in Türkiye? Go When your e-Visa expires, you are not
                allowed to apply for a new e-Visa without departing from Türkiye
                ; but you are advised to apply at Provincial Directorate of
                Migration Management for a residence permit. Please click on the
                following link to get more detailed information regarding the
                application of a residence permit and other types of visa (work
                visa, student visa etc.) http://www.goc.gov.tr/main/En_3 |If you
                overstay your visa, you might be asked to pay fines, deported or
                banned future travel to Turkey for a specific period of time.
              </p>
            </div>
          )}
        </div>
      </section>


        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
