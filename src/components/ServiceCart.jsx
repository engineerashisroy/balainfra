import React from "react";
const data = [
  {
    id: 1,
    title: "Construction Management",
    description:
      "Construction management ensures timely, budget-friendly, quality project completion through planning, risk management, and effective communication. ",
  },
  {
    id: 2,
    title: "Residential Construction",
    description:
      "Residential construction involves building and renovating homes, ensuring structural integrity, aesthetics, and client satisfaction. ",
  },
  {
    id: 3,
    title: "Facility Maintenance",
    description:
      "Facility maintenance ensures optimal operation by regularly inspecting, repairing, and preserving building systems and infrastructure.",
  },
  {
    id: 4,
    title: "Renovation",
    description:
      "Renovation transforms existing spaces through remodeling, upgrades, and improvements, enhancing functionality, aesthetics, and overall property value.",
  },
  {
    id: 5,
    title: "Pavement Preservation",
    description:
      "Pavement preservation prolongs road life through cost-effective treatments, preventing deterioration and ensuring long-term durability and functionality.",
  },
  {
    id: 6,
    title: "Site Location",
    description:
      "Site location involves strategic selection based on resources, transportation, labor, regulations, and market access for optimal efficiency.",
  },
];
const ServiceCart = () => {
  return (
    <div>
      <div className="text-center">
        <h3>What we are do !</h3>
        <p className="text-5xl">Our Services</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {data.map((item) => (
          <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-2">
              <figure className="px-10 pt-10">
                {/* <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              /> */}
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn text-green-600">More Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCart;
