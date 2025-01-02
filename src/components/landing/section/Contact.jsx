import * as React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "@/assets/svg/loading.svg";
// import ContactImg from "@/assets/svg/contact_image.svg";
import ContactImg from "@/assets/png/contact_image.png";
import { formLanding } from "@/helpers/axiosFormLanding.js";

const ContactSection = () => {
  const [isAppointmentChecked, setIsAppointmentChecked] = useState(false);
  const [appointmentDateTime, setAppointmentDateTime] = useState("");
  const [loading, setLoading] = useState(false);

  // Fungsi untuk menangani perubahan checkbox
  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsAppointmentChecked(isChecked);

    if (!isChecked) {
      setAppointmentDateTime("");
      setData((prev) => ({ ...prev, dateTime: "" }));
    }
  };

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    dateTime: "",
    message: "",
  });

  const formatDateTime = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleDateTimeChange = (e) => {
    const rawValue = e.target.value;
    const formattedValue = formatDateTime(rawValue);
    setData((prev) => ({ ...prev, dateTime: formattedValue }));
    setAppointmentDateTime(rawValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isAppointmentChecked && !appointmentDateTime) {
      toast.error("Please select a date and time for the appointment.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone_number", data.phone);
    formData.append("email", data.email);
    formData.append("date", data.dateTime);
    formData.append("message", data.message);

    // formLanding(formData);

    const isSuccess = await formLanding(formData, setLoading);

    if (isSuccess) {
      setData({
        name: "",
        phone: "",
        email: "",
        dateTime: "",
        message: "",
      });
      setAppointmentDateTime("");
      setIsAppointmentChecked(false);
    }
  };

  return (
    <section id="contact" className="pt-[120px]">
      {/* xl:mr-[54px] xl:ml-0 xl2:mr-[94px] xl2:ml-0 xl3:mr-[134px] xl3:ml-0
      2xl:mr-[182px] 2xl:ml-0 */}
      <div className="flex justify-center">
        <div className="flex justify-between items-center border border-red-500 lg:min-w-[1145.5px] xl:min-w-[1338px] relative lg:-left-[95px] xl:-left-[94px] mb-[7.5rem]">
          <img
            src={ContactImg}
            className="lg:w-[55%] xl:w-[95%] lg:h-[635px] xl:h-[680px] object-cover rounded-r-3xl"
          />
          <div className="w-full flex flex-col lg:pl-8 xl:pl-12">
            <div className="flex flex-col items-start mb-9">
              <h2 className="font-bold lg:text-[35px] xl:text-[2.5rem] text-custom-blue">
                Get in touch
              </h2>
              <p className="font-light lg:text-sm xl:text-base text-custom-A7ABB6">
                Have an enquiry? Fill out the form to contact our team
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3.5">
                <div className="w-full flex flex-col space-y-[0.8125rem]">
                  <label
                    htmlFor="name"
                    className="w-max text-custom-blue font-medium lg:text-sm xl:text-base"
                  >
                    Name<span className="text-custom-purple">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={data.name}
                    placeholder="Your name"
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="bg-transparent placeholder-custom-gray font-normal lg:text-sm xl:text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                  />
                </div>
                <div className="w-full flex flex-col space-y-[0.8125rem]">
                  <label
                    htmlFor="phone"
                    className="w-max text-custom-blue font-medium lg:text-sm xl:text-base"
                  >
                    Phone number<span className="text-custom-purple">*</span>
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={data.phone}
                    placeholder="089015151999"
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="bg-transparent placeholder-custom-gray font-normal lg:text-sm xl:text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                  />
                </div>
              </div>
              <div className="flex space-x-3.5 items-end">
                <div className="w-full flex flex-col space-y-[0.8125rem]">
                  <label
                    htmlFor="email"
                    className="w-max text-custom-blue font-medium lg:text-sm xl:text-base"
                  >
                    Email<span className="text-custom-purple">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={data.email}
                    placeholder="simple@example.com"
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="bg-transparent placeholder-custom-gray font-normal lg:text-sm xl:text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                  />
                </div>
                <div className="w-full border flex flex-col space-y-[0.8125rem]">
                  <div className="flex items-center space-x-2">
                    <input
                      id="appoinment"
                      type="checkbox"
                      checked={isAppointmentChecked}
                      onChange={handleCheckboxChange}
                      className="accent-custom-purple h-[1.125rem] w-[1.125rem] cursor-pointer"
                    />
                    <label
                      htmlFor="appoinment"
                      className="text-custom-blue font-medium lg:text-sm xl:text-base cursor-pointer"
                    >
                      Make an appoinment?
                    </label>
                  </div>
                  <div className="w-full flex flex-col space-y-[0.8125rem]">
                    <label
                      htmlFor="datetime"
                      className={`w-max text-custom-blue font-medium lg:text-sm xl:text-base transition duration-500 ease-out ${
                        !isAppointmentChecked
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                    >
                      Date and time
                      <span className="text-custom-purple">*</span>
                    </label>
                    <input
                      id="datetime"
                      type="datetime-local"
                      disabled={!isAppointmentChecked}
                      required={isAppointmentChecked}
                      value={appointmentDateTime}
                      onChange={handleDateTimeChange}
                      className={`bg-transparent font-normal lg:text-sm xl:text-base border border-custom-A7ABB6 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple transition duration-500 ease-out ${
                        !isAppointmentChecked
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-[0.8125rem]">
                <label
                  htmlFor="message"
                  className="w-max text-custom-blue font-medium lg:text-sm xl:text-base"
                >
                  Message<span className="text-custom-purple">*</span>
                </label>
                <textarea
                  id="message"
                  type="text"
                  value={data.message}
                  placeholder="Your question/message"
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  className="bg-transparent placeholder-custom-gray font-normal lg:text-sm xl:text-base border border-custom-A7ABB6 h-28 px-4 py-3 rounded-xl focus:bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-purple"
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="bg-custom-purple w-40 py-3 flex justify-center items-center font-medium lg:text-sm xl:text-base text-white rounded-full hover:bg-custom-blue transition duration-200 ease-in-out shadow-xl"
                style={{
                  boxShadow: "0 1.25rem 1.875rem rgba(0, 0, 0, 0.1)",
                }}
              >
                {loading ? (
                  <div className="flex gap-2 items-center">
                    <img src={Loading} className="h-6 animate-spin" />
                    Loading...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
