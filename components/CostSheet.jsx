'use client';

import { useState, useEffect } from 'react';
import jsPDF from 'jspdf';

export default function CostSheet() {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    mobile: '',
    plotNo: '',
  });

  const [plot, setPlot] = useState({
    areaSqYd: 0,
    areaSqFt: 0,
    rate: 9250,
  });

  const [charges, setCharges] = useState({
    devPerYd: 500,
    plcPerYd: 250,
    maintenance: 50000,
    legal: 20000,
  });

  const [totals, setTotals] = useState({
    plotAmount: 0,
    devAmount: 0,
    plcAmount: 0,
    addCharges: 0,
    totalPayable: 0,
  });

  useEffect(() => {
    const plotAmount = plot.areaSqYd * plot.rate;
    const devAmount = plot.areaSqYd * charges.devPerYd;
    const plcAmount = plot.areaSqYd * charges.plcPerYd;
    const addCharges = devAmount + plcAmount + charges.maintenance + charges.legal;
    const totalPayable = plotAmount + addCharges;

    setTotals({ plotAmount, devAmount, plcAmount, addCharges, totalPayable });
  }, [plot, charges]);

  const handleChange = (setFunc) => (e) => {
    const { name, value, type } = e.target;
    // For number inputs, parse to number else keep string
    setFunc((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor('#4F46E5'); // Indigo-600 color
    doc.text('Cost Sheet', 105, 20, null, null, 'center');

    doc.setFontSize(14);
    doc.setTextColor('#111827'); // Gray-900

    let y = 40;
    doc.text('Customer Details:', 14, y);
    y += 10;
    doc.text(`Name: ${customer.name || '-'}`, 14, y);
    y += 10;
    doc.text(`Email: ${customer.email || '-'}`, 14, y);
    y += 10;
    doc.text(`Mobile: ${customer.mobile || '-'}`, 14, y);
    y += 10;
    doc.text(`Plot No: ${customer.plotNo || '-'}`, 14, y);

    y += 20;
    doc.text('Plot Details:', 14, y);
    y += 10;
    doc.text(`Area (Sq.Yard): ${plot.areaSqYd}`, 14, y);
    y += 10;
    doc.text(`Area (Sq.Ft): ${plot.areaSqFt}`, 14, y);
    y += 10;
    doc.text(`Base Price: ₹${plot.rate}`, 14, y);
    y += 10;
    doc.text(`Plot Amount: ₹${totals.plotAmount.toLocaleString()}`, 14, y);

    y += 20;
    doc.text('Additional Charges:', 14, y);
    y += 10;
    doc.text(`Development Charge: ₹${totals.devAmount.toLocaleString()}`, 14, y);
    y += 10;
    doc.text(`PLC Amount: ₹${totals.plcAmount.toLocaleString()}`, 14, y);
    y += 10;
    doc.text(`Maintenance: ₹${charges.maintenance.toLocaleString()}`, 14, y);
    y += 10;
    doc.text(`Legal Fees: ₹${charges.legal.toLocaleString()}`, 14, y);
    y += 10;
    doc.text(`Total Additional Charges: ₹${totals.addCharges.toLocaleString()}`, 14, y);

    y += 20;
    doc.setFontSize(16);
    doc.setTextColor('#059669'); // Green-600
    doc.text(`TOTAL AMOUNT PAYABLE: ₹${totals.totalPayable.toLocaleString()}`, 14, y);

    doc.save('cost-sheet.pdf');
  };

  return (
    <div className="w-full  flex-row  px-8 py-5 bg-slate-50 ">
      <h2 className="text-5xl font-extrabold text-indigo-600 text-center mb-14 tracking-wide drop-shadow-md">
        Cost Sheet
      </h2>

      <div className="space-y-10 max-w-7xl mx-auto">

        {/* Customer Details */}
        <Section title="Customer Details">
          <Input
            name="name"
            label="Name"
            placeholder="Enter customer name"
            value={customer.name}
            onChange={handleChange(setCustomer)}
          />
          <Input
            name="email"
            label="Email"
            placeholder="Enter email address"
            value={customer.email}
            onChange={handleChange(setCustomer)}
          />
          <Input
            name="mobile"
            label="Mobile"
            placeholder="Enter mobile number"
            value={customer.mobile}
            onChange={handleChange(setCustomer)}
          />
          <Input
            name="plotNo"
            label="Plot No."
            placeholder="Enter plot number"
            value={customer.plotNo}
            onChange={handleChange(setCustomer)}
          />
        </Section>

        {/* Plot Details */}
        <Section title="Plot Details">
          <Input
            type="number"
            name="areaSqYd"
            label="Area (Sq.Yard)"
            placeholder="Enter area in sq. yards"
            value={plot.areaSqYd}
            onChange={handleChange(setPlot)}
          />
          <Input
            type="number"
            name="areaSqFt"
            label="Area (Sq.Ft)"
            placeholder="Enter area in sq. feet"
            value={plot.areaSqFt}
            onChange={handleChange(setPlot)}
          />
          <Input
            type="number"
            name="rate"
            label="Base Selling Price (₹)"
            placeholder="Base price per sq. yard"
            value={plot.rate}
            onChange={handleChange(setPlot)}
          />
          <Readonly label="Plot Amount (₹)" value={totals.plotAmount} />
        </Section>

        {/* Additional Charges */}
        <Section title="Additional Charges">
          <Input
            type="number"
            name="devPerYd"
            label="Development Charge (₹/Sq.Yard)"
            placeholder="Enter development charge per sq.yard"
            value={charges.devPerYd}
            onChange={handleChange(setCharges)}
          />
          <Readonly label="Development Charge Amount (₹)" value={totals.devAmount} />

          <Input
            type="number"
            name="plcPerYd"
            label="PLC Charge (₹/Sq.Yard)"
            placeholder="Enter PLC charge per sq.yard"
            value={charges.plcPerYd}
            onChange={handleChange(setCharges)}
          />
          <Readonly label="PLC Amount (₹)" value={totals.plcAmount} />

          <Input
            type="number"
            name="maintenance"
            label="Maintenance Charges (₹)"
            placeholder="Enter maintenance charges"
            value={charges.maintenance}
            onChange={handleChange(setCharges)}
          />
          <Input
            type="number"
            name="legal"
            label="Legal Fees (₹)"
            placeholder="Enter legal fees"
            value={charges.legal}
            onChange={handleChange(setCharges)}
          />
          <Readonly label="Total Additional Charges (₹)" value={totals.addCharges} />
        </Section>

        {/* Total */}
        <div className="text-center mt-8">
          <p className="text-3xl font-extrabold text-green-700 mb-6 tracking-tight drop-shadow-md">
            TOTAL AMOUNT PAYABLE: ₹{totals.totalPayable.toLocaleString()}
          </p>
          <button
            onClick={downloadPDF}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-8 py-4 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Download Cost Sheet PDF
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">{children}</div>
    </section>
  );
}

function Input({ name, label, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                   transition duration-200 ease-in-out text-gray-900"
      />
    </div>
  );
}

function Readonly({ label, value }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type="text"
        value={`₹${value.toLocaleString()}`}
        readOnly
        className="w-full px-4 py-3 border border-gray-200 bg-gray-100 rounded-lg shadow-sm
                   text-gray-700 cursor-not-allowed"
      />
    </div>
  );
}
