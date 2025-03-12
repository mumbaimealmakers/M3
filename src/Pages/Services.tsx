
import corporate from "../../public/images/corporate.webp"
import eventandBulk from "../../public/images/eventandBulk.png"
import customize from "../../public/images/customize-meal.png"

const services = [
    {
        title: "Corporate Breakfast & Snack Services",
        description:
            "We provide nutritious and delicious breakfast and snack options for corporate offices, ensuring a productive start to the day.",
        image: corporate,
    },
    {
        title: "Event & Bulk Orders",
        description:
            "We cater to events of all sizes, from corporate gatherings to social functions, with customized bulk meal options.",
        image: eventandBulk,
    },
    {
        title: "Customised B2B Meal Solutions",
        description:
            "Tailored meal plans designed to meet the unique requirements of businesses, ensuring consistency and quality.",
        image: customize,
    },
];

const Services = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
                Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services