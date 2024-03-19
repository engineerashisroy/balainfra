import React from "react";
const data = [
  {
    id: 1,
    title: "Expertise and Experience",
    description:
      " With years of experience in the construction industry, Jay Chand Bala (JCB) Building Construction has amassed a wealth of knowledge and expertise. ",
  },
  {
    id: 2,
    title: "Quality Craftsmanship",
    description:
      "We take immense pride in our commitment to delivering projects of the highest quality. Our attention to detail and dedication to craftsmanship ensure that every ",
  },
  {
    id: 3,
    title: "Comprehensive Services",
    description:
      "At JCBalaBuildCon.com, we offer a full spectrum of construction services, from architectural design to construction management, interior design, renovation",
  },
];
const HomeCart = () => {
  return (
    <div class="bg-white  ">
      <div class="mx-auto max-w-7xl m-5 lg:px-8">
        <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-2 text-center lg:grid-cols-3">
          {data.map((item) => (
            <div className="border border-1 p-3">
              <div class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-xl leading-7 text-gray-600 text-justify">
                  {item.description}
                </dt>
                <dd class="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-xl">
                  {item.title}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default HomeCart;
