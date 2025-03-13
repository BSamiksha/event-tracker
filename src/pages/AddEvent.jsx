import React from "react";
import Textbox from "../components/Textbox";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddEvent = ({ addNewEvent }) => {
  const navigate = useNavigate();
  const inputRef = React.useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(':');
    let period = 'AM';
    let adjustedHour = parseInt(hour);
  
    if (adjustedHour === 0) {
      adjustedHour = 12; // Midnight case
    } else if (adjustedHour === 12) {
      period = 'PM'; // Noon case
    } else if (adjustedHour > 12) {
      adjustedHour -= 12;
      period = 'PM';
    }
  
    return `${adjustedHour}:${minute} ${period}`;
  };

  const handleAddEvent = (data) => {
    const newEvent = {
      title: data.title,
      description: data.desc,
      category: data.category,
      location: data.location,
      time: convertTo12HourFormat(data.time),
      date: data.date,
    };
    addNewEvent(newEvent);
    navigate("/events/view");
  };
  return (
    <div data-aos="fade-up" className="rounded-xl bg-[#ebebf0] overflow-hidden shadow-md hover:shadow-xl m-auto w-full max-w-2xl mt-7">
      <div className="text-xl sm:text-2xl text-black font-bold p-4 text-center">
        Add New Event
      </div>

      <form onSubmit={handleSubmit(handleAddEvent)} className="p-4">
        <div className="flex flex-col gap-6">
          {/* Event Title */}
          <Textbox
            placeholder="Event title"
            type="text"
            name="title"
            label="Event Title"
            ref={inputRef}
            className="w-full rounded"
            register={register("title", { required: "Title is required" })}
            error={errors.title ? errors.title.message : ""}
          />

          {/* Description */}
          <Textbox
            placeholder="Description"
            type="textarea"
            name="desc"
            ref={inputRef}
            label="Description"
            className="w-full rounded"
            register={register("desc", { required: "Description is required" })}
            error={errors.desc ? errors.desc.message : ""}
          />

          {/* Category */}
          <Textbox
            placeholder="Category"
            type="dropdown"
            name="category"
            label="Select Category"
            ref={inputRef}
            className="w-full rounded"
            register={register("category", {
              required: "Category is required",
            })}
            error={errors.category ? errors.category.message : ""}
            options={[
              { value: "charity", label: "Charity" },
              { value: "religious", label: "Religious" },
              { value: "social", label: "Social" },
            ]}
          />

          {/* Location */}
          <Textbox
            placeholder="Location"
            type="text"
            name="location"
            label="Location"
            ref={inputRef}
            className="w-full rounded"
            register={register("location", {
              required: "Location is required",
            })}
            error={errors.location ? errors.location.message : ""}
          />

          {/* Time */}
          <Textbox
            placeholder="Time"
            type="time"
            name="time"
            ref={inputRef}
            label="Time of Event"
            className="w-full rounded"
            register={register("time", { required: "Time is required" })}
            error={errors.time ? errors.time.message : ""}
          />

          {/* Date */}
          <Textbox
            placeholder="Date"
            type="date"
            name="date"
            ref={inputRef}
            label="Date of Event"
            className="w-full rounded"
            register={register("date", { required: "Date is required" })}
            error={errors.date ? errors.date.message : ""}
            min={new Date().toISOString().split('T')[0]}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="m-auto mb-3 w-fit flex justify-center cursor-pointer items-center gap-2 font-semibold bg-gradient-to-r from-[hsl(187,85%,43%)] to-[hsl(199,100%,33%)] text-white px-4 py-2 rounded-full text-sm sm:text-md hover:opacity-90 transition duration-300"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
