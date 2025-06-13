"use client";

import { motion } from "framer-motion";
import contactDetails from "../../data/contactDetails";

export default function TermsAndConditionsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mx-auto pb-8"
    >
      <div className="bg-gray-900 pb-10 pt-40">
        <div className="wrapper">
          <h1 className="mb-4 text-3xl font-bold text-background md:text-4xl">
            Terms & Conditions
          </h1>
        </div>
      </div>
      <div className="wrapper pt-10">
        <p className="mb-6 text-gray-600">Last Updated: 01/06/2025</p>
        <p className="mb-4 leading-relaxed">
          Welcome to ecoscapebd.com (&quot;Site&quot;), operated by Ecoscape BD.
          These Terms & Conditions govern your access to and use of our website
          and services. By using our Site and engaging our services, you agree
          to comply with and be bound by the following terms.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">1. General Terms</h2>
        <p className="mb-2 leading-relaxed">
          1.1. All projects undertaken by Ecoscape BD will be subject to mutual
          agreement and a formal quotation (Bill of Quantity - BOQ), valid for
          60 days from the date of issue.
        </p>
        <p className="mb-2 leading-relaxed">
          1.2. All quoted prices are exclusive of VAT and AIT, unless stated
          otherwise.
        </p>
        <p className="mb-4 leading-relaxed">
          1.3. Project scope may vary up to &plusmn;10%, depending on site
          conditions and practical adjustments during execution. All such
          changes must be discussed and mutually agreed upon by both parties.
        </p>
        <p className="mb-4 leading-relaxed">
          1.4. Information presented on the website, including but not limited
          to product descriptions, service details, and project examples, is
          subject to change in real-life application and execution. Ecoscape BD
          reserves the right to modify or update such information without prior
          notice.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          2. Client Responsibilities
        </h2>
        <p className="mb-2 leading-relaxed">
          2.1. The Client shall provide all relevant data, documents, and
          information requested by Ecoscape BD for the planning and execution of
          the project.
        </p>
        <p className="mb-2 leading-relaxed">
          2.2. The Client shall ensure free and prior-notified access to the
          site for inspections, installations, and construction activities
          during the project period.
        </p>
        <p className="mb-4 leading-relaxed">
          2.3. The Client agrees to cooperate fully and respond promptly to any
          communication or documentation needs related to the execution of
          services.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          3. Project Execution & Payments
        </h2>
        <p className="mb-2 leading-relaxed">
          3.1. Work on Interior Execution Projects will begin only upon receipt
          of advance payment as per the corresponding project invoice.
        </p>
        <p className="mb-2 leading-relaxed">
          3.2. Online Interior Design Consultations and Commercial Design
          Consultations will be initiated only after the total service charge
          has been paid in advance.
        </p>
        <p className="mb-2 leading-relaxed">
          3.3. Any delay in payments may result in project suspension or
          termination. Such delays shall affect or reduce the agreed project
          timeline or warranty.
        </p>
        <p className="mb-4 leading-relaxed">
          3.4. All site work will be conducted according to signed, approved
          working drawings.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          4. Product Orders & Changes
        </h2>
        <p className="mb-2 leading-relaxed">
          4.1. Ecoscape BD cannot cancel, replace, or modify any items once a
          purchase order has been placed and invoiced.
        </p>
        <p className="mb-2 leading-relaxed">
          4.2. Any design modifications requested after delivery of final plans
          in online or packaged services cannot be accommodated.
        </p>
        <p className="mb-4 leading-relaxed">
          4.3. Prices of imported items are subject to fluctuations due to
          market availability, foreign exchange rates, or supply chain issues.
          Any resulting cost adjustments will be communicated prior to
          procurement.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          5. Delivery & Force Majeure
        </h2>
        <p className="mb-2 leading-relaxed">
          5.1. Online design plans (for up to two rooms) will be delivered
          within 10 working days, barring unforeseen delays.
        </p>
        <p className="mb-4 leading-relaxed">
          5.2. In case of Force Majeure events (natural disasters, pandemics,
          strikes, political unrest, etc.), service delivery may be temporarily
          suspended. The project timeline will be extended proportionately,
          along with a maximum of one week for remobilization.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          6. Warranty & Maintenance
        </h2>
        <p className="mb-2 leading-relaxed">
          6.1. All completed interior projects come with a 1-year hardware
          replacement guarantee and 2 years of service warranty, effective from
          the date of project handover.
        </p>
        <p className="mb-4 leading-relaxed">
          6.2. The warranty does not cover damage due to misuse, negligence, or
          external accidents.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          7. Refund & Cancellation Policy
        </h2>
        <p className="mb-2 leading-relaxed">
          7.1. No cancellations will be accepted once an order or project has
          been confirmed and payment has been made.
        </p>
        <p className="mb-2 leading-relaxed">
          7.2. For logistical reasons, orders may be cancelled by Ecoscape BD.
          In such cases, the Client will receive a full refund.
        </p>
        <p className="mb-2 leading-relaxed">
          7.3. Refunds for damaged products or incomplete deliveries must be
          requested within 3 days of receipt with photo evidence and original
          packaging retained.
        </p>
        <p className="mb-4 leading-relaxed">
          7.4. Refunds, when applicable, will be processed after reverse pickup,
          within 3&ndash;7 working days.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">8. Privacy Policy</h2>
        <p className="mb-2 leading-relaxed">
          8.1. Ecoscape BD is committed to protecting your personal information.
          We only collect data necessary to process your orders, communicate
          with you, and improve our services.
        </p>
        <p className="mb-2 leading-relaxed">
          8.2. Information collected may include your name, contact details,
          payment information, and delivery addresses. This data will be stored
          securely and will not be shared without your consent except with
          trusted third parties (e.g. logistics or payment processors).
        </p>
        <p className="mb-4 leading-relaxed">
          8.3. You may opt out of promotional emails at any time by clicking the
          unsubscribe link or contacting us directly.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          9. Security Measures
        </h2>
        <p className="mb-2 leading-relaxed">
          9.1. All data shared via our Site is transmitted over secure servers
          protected by firewalls and encryption protocols.
        </p>
        <p className="mb-4 leading-relaxed">
          9.2. While we take reasonable steps to ensure security, users are
          responsible for keeping login credentials safe. Ecoscape BD will not
          be held liable for unauthorized access due to compromised passwords.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          10. Cookies & Analytics
        </h2>
        <p className="mb-2 leading-relaxed">
          10.1. Our website uses cookies and Google Analytics to understand user
          behavior and enhance browsing experience. You may disable cookies via
          your browser settings, but certain functionalities may be affected.
        </p>
        <p className="mb-4 leading-relaxed">
          10.2. Data collected through analytics tools will not include
          personally identifiable information unless provided by the user
          voluntarily.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          11. Ethical & Social Responsibility
        </h2>
        <p className="mb-2 leading-relaxed">
          11.1. Ecoscape BD is committed to environmentally conscious design
          practices and encourages the use of sustainable materials wherever
          possible.
        </p>
        <p className="mb-4 leading-relaxed">
          11.2. We do not engage in or support unethical labor practices and
          expect the same from our suppliers and subcontractors.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          12. Confidentiality
        </h2>
        <p className="mb-4 leading-relaxed">
          12.1. Clients may receive access to confidential business data, design
          concepts, or project methodologies. Such information must be kept
          private and not disclosed to third parties without written permission
          from Ecoscape BD.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">
          13. Dispute Resolution
        </h2>
        <p className="mb-2 leading-relaxed">
          13.1. Any disagreements arising from these terms or services rendered
          will first be attempted to be resolved amicably between both parties.
        </p>
        <p className="mb-4 leading-relaxed">
          13.2. If unresolved, disputes will fall under the jurisdiction of the
          courts of Dhaka, Bangladesh.
        </p>

        <h2 className="mb-3 mt-8 text-2xl font-semibold">14. Amendments</h2>
        <p className="mb-4 leading-relaxed">
          Ecoscape BD reserves the right to update these Terms & Conditions at
          any time. Continued use of the Site or services after such changes
          constitutes your acceptance of the updated terms.
        </p>

        <p className="mt-8 font-semibold">
          For further questions, you may contact:
        </p>
        <p>Ecoscape BD</p>
        <p>{contactDetails.address}</p>
        <p>Email: {contactDetails.email}</p>
        <p>Phone: {contactDetails.phone}</p>
        <p>Website: https://www.ecoscapebd.com</p>
      </div>
    </motion.div>
  );
}
