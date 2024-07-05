
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Invoices Page</h1>
        <p className="mb-6">Here you can find all your invoices. Please find the details below:</p>
        
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2">Invoice #</th>
              <th className="px-4 py-2 border-b-2">Date</th>
              <th className="px-4 py-2 border-b-2">Amount</th>
              <th className="px-4 py-2 border-b-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">001</td>
              <td className="px-4 py-2 border-b">2023-06-25</td>
              <td className="px-4 py-2 border-b">$100.00</td>
              <td className="px-4 py-2 border-b text-green-600">Paid</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">002</td>
              <td className="px-4 py-2 border-b">2023-07-01</td>
              <td className="px-4 py-2 border-b">$200.00</td>
              <td className="px-4 py-2 border-b text-red-600">Unpaid</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">003</td>
              <td className="px-4 py-2 border-b">2023-07-15</td>
              <td className="px-4 py-2 border-b">$150.00</td>
              <td className="px-4 py-2 border-b text-yellow-600">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
