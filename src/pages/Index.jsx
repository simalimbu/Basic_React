import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const attendanceData = [
    { id: 1, name: "Sima Limbu", day: "Monday", present: true },
    { id: 2, name: "Sikha Rai", day: "Tuesday", present: false },
    { id: 3, name: "Uma Tamang", day: "Wednesday", present: true },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Attendance</h1>
          <Link to="/addstudent">
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-medium shadow">
                + Add Student
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Day
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Present
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {student.day}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <input
                      type="checkbox"
                      checked={student.present}
                      className="form-checkbox h-5 w-5 text-blue-600"
                      readOnly
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center space-x-2">
                    <Link to="/editstudent">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg text-sm shadow">
                      Edit
                    </button>
                    </Link>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm shadow">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
