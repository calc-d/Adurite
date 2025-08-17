import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

interface Item {
  name: string;
  image: string;
  rap: string;
  seller?: string;
  price: number;
}

const ItemCard: React.FC<{ item: Item }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    // Mock check: username must have > 1500 robux
    const robux = Math.floor(Math.random() * 3000); // 🔹 replace with real check later
    if (robux < 1500) {
      setError("Your account must have more than 1500 Robux!");
    } else {
      setError("");
      setStep(2);
    }
  };

  return (
    <>
      {/* Item card */}
      <div
        onClick={() => setIsOpen(true)}
        className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p>RAP: {item.rap}</p>
        {item.seller && <p>Seller: {item.seller}</p>}
        <p className="text-red-400 font-bold">${item.price.toLocaleString()}</p>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <Dialog.Panel className="bg-gray-900 rounded-lg p-6 w-[500px] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              <X />
            </button>

            {/* Steps */}
            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p>RAP: {item.rap}</p>
                {item.seller && <p>Seller: {item.seller}</p>}
                <p className="text-red-400 font-bold">${item.price.toLocaleString()}</p>

                <div className="mt-4">
                  <label className="block mb-2">What is your in-game Username?</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                    placeholder="Search your account..."
                  />
                  {error && <p className="text-red-500 mt-2">{error}</p>}
                  <button
                    onClick={handleSearch}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Search
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold mb-4">{item.name}</h2>
                <p className="text-2xl font-bold">${item.price.toLocaleString()}</p>
                <p className="mt-2">Please select a payment method:</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setStep(3)}
                    className="bg-gray-800 p-4 rounded hover:bg-gray-700"
                  >
                    Bitcoin
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-gray-800 p-4 rounded hover:bg-gray-700"
                  >
                    Litecoin
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="bg-gray-800 p-4 rounded hover:bg-gray-700"
                  >
                    Crypto
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">{item.name}</h2>
                <p className="text-2xl font-bold">${item.price.toLocaleString()}</p>
                <p className="mt-2">Send your payment to this address:</p>

                <div className="mt-4">
                  <img src="/images/qrcode.png" alt="QR Code" className="mx-auto w-32 h-32" />
                  <div className="flex justify-center mt-4">
                    <input
                      type="text"
                      readOnly
                      value="ltc1q07guhtduwg9ka7dzz7x6a6dkl2trg7nexmwc"
                      className="bg-gray-800 p-2 w-[80%] rounded"
                    />
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText("ltc1q07guhtduwg9ka7dzz7x6a6dkl2trg7nexmwc")
                      }
                      className="ml-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ItemCard;
