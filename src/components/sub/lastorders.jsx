import { Link } from "react-router-dom";

const LastOrders = () => {
  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 col-span-2 md:col-span-3">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-[600]">Last Orders</h1>
        <Link to="/" className="text-[#34CAA5]">
          See All
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-pre text-left">
          <tr>
            <th className="p-4 whitespace-pre text-[#9CA4AB] font-[500]">
              Name
            </th>
            <th className="p-4 whitespace-pre text-[#9CA4AB] font-[500]">
              Date
            </th>
            <th className="p-4 whitespace-pre text-[#9CA4AB] font-[500]">
              Amount
            </th>
            <th className="p-4 whitespace-pre text-[#9CA4AB] font-[500]">
              Status
            </th>
            <th className="p-4 whitespace-pre text-[#9CA4AB] font-[500]">
              Invoice
            </th>
          </tr>
          <tr className="align-top">
            <td className="p-4 whitespace-pre border-b">
              <span className="flex items-center">
                <img src="/icons/table/marcus.png" alt="" />
                <span className="ml-2 inline-block mr-2">Marcus Doe</span>
              </span>
            </td>
            <td className="p-4 whitespace-pre border-b">Nov 15, 2023</td>
            <td className="p-4 whitespace-pre border-b font-[600]">$80,000</td>
            <td className="p-4 whitespace-pre border-b">
              <span className="text-[#34CAA5]">Paid</span>
            </td>
            <td className="p-4 whitespace-pre border-b ">
              <span className="flex items-center">
                <img src="/icons/table/invoice.png" alt="" />
                <span className="ml-2 inline-block mr-2">View</span>
              </span>
            </td>
          </tr>
          <tr className="align-top">
            <td className="p-4 whitespace-pre border-b">
              <span className="flex items-center">
                <img src="/icons/table/jaydon.png" alt="" />
                <span className="ml-2 inline-block mr-2">Jaydon Vaccaro</span>
              </span>
            </td>
            <td className="p-4 whitespace-pre border-b">Nov 15, 2023</td>
            <td className="p-4 whitespace-pre border-b font-[600]">$150,000</td>
            <td className="p-4 whitespace-pre border-b">
              <span className="text-[#FF0000]">Refund</span>
            </td>
            <td className="p-4 whitespace-pre border-b ">
              <span className="flex items-center">
                <img src="/icons/table/invoice.png" alt="" />
                <span className="ml-2 inline-block mr-2">View</span>
              </span>
            </td>
          </tr>
          <tr className="align-top">
            <td className="p-4 whitespace-pre border-b">
              <span className="flex items-center">
                <img src="/icons/table/corey.png" alt="" />
                <span className="ml-2 inline-block mr-2">Corey Schleifer</span>
              </span>
            </td>
            <td className="p-4 whitespace-pre border-b">Nov 14, 2023</td>
            <td className="p-4 whitespace-pre border-b font-[600]">$87,000</td>
            <td className="p-4 whitespace-pre border-b">
              <span className="text-[#34CAA5]">Paid</span>
            </td>
            <td className="p-4 whitespace-pre border-b ">
              <span className="flex items-center">
                <img src="/icons/table/invoice.png" alt="" />
                <span className="ml-2 inline-block mr-2">View</span>
              </span>
            </td>
          </tr>
          <tr className="align-top">
            <td className="p-4 whitespace-pre border-b">
              <span className="flex items-center">
                <img src="/icons/table/cooperpress.png" alt="" />
                <span className="ml-2 inline-block mr-2">Cooper Press</span>
              </span>
            </td>
            <td className="p-4 whitespace-pre border-b">Nov 14, 2023</td>
            <td className="p-4 whitespace-pre border-b font-[600]">$100,000</td>
            <td className="p-4 whitespace-pre border-b">
              <span className="text-[#FF0000]">Refund</span>
            </td>
            <td className="p-4 whitespace-pre border-b ">
              <span className="flex items-center">
                <img src="/icons/table/invoice.png" alt="" />
                <span className="ml-2 inline-block mr-2">View</span>
              </span>
            </td>
          </tr>
          <tr className="align-top">
            <td className="p-4 whitespace-pre">
              <span className="flex items-center">
                <img src="/icons/table/philip.png" alt="" />
                <span className="ml-2 inline-block mr-2">Phillip Lubin</span>
              </span>
            </td>
            <td className="p-4 whitespace-pre">Nov 13, 2023</td>
            <td className="p-4 whitespace-pre font-[600]">$78,000</td>
            <td className="p-4 whitespace-pre">
              <span className="text-[#34CAA5]">Paid</span>
            </td>
            <td className="p-4 whitespace-pre">
              <span className="flex items-center">
                <img src="/icons/table/invoice.png" alt="" />
                <span className="ml-2 inline-block mr-2">View</span>
              </span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default LastOrders;
