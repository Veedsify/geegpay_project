import { X } from "lucide-react";
import { useInvoiceContext } from "../../libs/context";
import { useEffect } from "react";
const InvoiceModal = () => {
  const { invoiceActive, setInvoiceActive } = useInvoiceContext();
  const toggleInvoiceClose = () => {
    setInvoiceActive(false);
  };
  useEffect(() => {
    if (invoiceActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      if (invoiceActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };
  }, [invoiceActive]);
  return (
    <div
      className={`fixed w-full min-h-screen bg-black bg-opacity-10 z-50 top-0 left-0 grid place-items-center duration-300 ${
        invoiceActive
          ? "pointer-events-auto opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-md p-4">
        <div className="flex items-center gap-x-4 mb-8">
          <h1 className="text-lg md:text-2xl font-[600]">Invoice</h1>
          <span className="ml-auto cursor-pointer" onClick={toggleInvoiceClose}>
            <X size={30} />
          </span>
        </div>
        <div className="relative flex flex-col gap-3 sm:flex-row sm:flex-wrap overflow-y-auto max-h-[400px]">
          <div className="bg-white rounded-lg md:w-96 sm:px-6 px-1 m-2 py-8 max-w-lg mx-auto mt-8 xs-width">
            <h1 className="font-bold text-2xl my-4 text-center text-[#34CAA5]">
              Geegpay Services
            </h1>
            <hr className="mb-2" />
            <div className="flex justify-between gap-3 mb-6">
              <h1 className="text-lg font-bold">Invoice</h1>
              <div className="text-gray-700">
                <div>Date: Nov 15, 2023</div>
                <div>Invoice #: INV12345</div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">Bill To:</h2>
              <div className="text-gray-700 mb-2">Marcus Doe</div>
              <div className="text-gray-700 mb-2">123 Main St.</div>
              <div className="text-gray-700 mb-2">Anytown, USA 12345</div>
              <div className="text-gray-700">marcusdoe@example.com</div>
            </div>
            <table className="w-full mb-8">
              <thead>
                <tr>
                  <th className="text-left font-bold text-gray-700">
                    Description
                  </th>
                  <th className="text-right font-bold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left text-gray-700">Product 1</td>
                  <td className="text-right text-gray-700">$80,000.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="text-left font-bold text-gray-700">Total</td>
                  <td className="text-right font-bold text-gray-700">
                    $80,000.00
                  </td>
                </tr>
              </tfoot>
            </table>
            <div className="text-gray-700 mb-2">
              Thank you for your business!
            </div>
            <div className="text-gray-700 text-sm">Payment Status: Paid</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
