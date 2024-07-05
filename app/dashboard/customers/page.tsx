
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Customers Page</h1>
        <p className="mb-6">Here you can find the details of all your customers. Please find the details below:</p>
        
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2">Customer ID</th>
              <th className="px-4 py-2 border-b-2">Name</th>
              <th className="px-4 py-2 border-b-2">Email</th>
              <th className="px-4 py-2 border-b-2">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">C001</td>
              <td className="px-4 py-2 border-b">John Doe</td>
              <td className="px-4 py-2 border-b">johndoe@example.com</td>
              <td className="px-4 py-2 border-b">(123) 456-7890</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">C002</td>
              <td className="px-4 py-2 border-b">Jane Smith</td>
              <td className="px-4 py-2 border-b">janesmith@example.com</td>
              <td className="px-4 py-2 border-b">(987) 654-3210</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">C003</td>
              <td className="px-4 py-2 border-b">Bob Johnson</td>
              <td className="px-4 py-2 border-b">bobjohnson@example.com</td>
              <td className="px-4 py-2 border-b">(555) 555-5555</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
