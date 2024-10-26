import { Card, Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "../styles/PremiumAccessPage.css";

export default function PremiumAccessPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const navigate = useNavigate();

  // Toggle modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
    // Add shake animation to the modal
    const modalElement = document.getElementById("paymentModal");
    if (modalElement) {
      modalElement.classList.add("animate-shake");
      setTimeout(() => modalElement.classList.remove("animate-shake"), 500);
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        theme === "light" ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <Card className="max-w-md w-full shadow-lg">
        <h2
          className={`text-2xl font-bold text-center mb-6 ${
            theme === "light" ? "text-gray-900" : "text-white"
          }`}
        >
          KINDLY UPGRADE TO PREMIUM
        </h2>
        <p
          className={`text-center mb-4 ${
            theme === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          Unlock exclusive content, features, and more by upgrading to premium.
        </p>

        {/* Pricing Plans */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full bg-indigo-100 p-4 rounded-lg text-center">
            <p className="text-lg font-semibold">Monthly Plan</p>
            <p className="text-sm text-gray-500">₦25,000/month</p>
          </div>
          <div className="w-full bg-purple-100 p-4 rounded-lg text-center">
            <p className="text-lg font-semibold">Annual Plan</p>
            <p className="text-sm text-gray-500">₦250,000/year (Save 17%)</p>
          </div>

          {/* Upgrade Button */}
          <Button
            onClick={toggleModal}
            gradientDuoTone="purpleToBlue"
            size="lg"
            className="w-full animate-shake"
          >
            Upgrade to Premium
          </Button>

          <Button
            outline
            color="gray"
            onClick={() => navigate("/")}
            className="w-full"
          >
            Back to Home
          </Button>
        </div>
      </Card>

      {/* Payment Modal */}
      <Modal show={isOpen} onClose={toggleModal} size="md">
        <Modal.Header className="text-lg font-bold text-center">
          Payment Details
        </Modal.Header>
        <Modal.Body id="paymentModal" className="animate-shake">
          <div className="flex flex-col gap-4 text-center">
            <p className="font-semibold text-gray-700">
              ACCOUNT NAME:{" "}
              <span className="text-gray-900">
                OLANIYAN OLUWASEGUN OLUWATOYOSI
              </span>
            </p>
            <p className="font-semibold text-gray-700">
              BANK NAME:{" "}
              <span className="text-gray-900">ACCESS BANK NIGERIA</span>
            </p>
            <p className="font-semibold text-gray-700">
              ACCOUNT NUMBER: <span className="text-gray-900">0043136561</span>
            </p>

            {/* WhatsApp/Contact Info */}
            <p className="font-semibold text-indigo-600">Send Receipt to:</p>
            <ul className="text-gray-700 text-left">
              <li className="flex items-center">
                <FaPhoneAlt className="inline mr-2 text-green-600" />
                <span>EXPERT TOYOSI - 08108663443</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="inline mr-2 text-green-600" />
                <span>EXPERT CHONG - 08065074094</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="inline mr-2 text-green-600" />
                <span>EXPERT ALEXIS - 08022196613</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="inline mr-2 text-green-600" />
                <span>WhatsApp any of the numbers above.</span>
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggleModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
