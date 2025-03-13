import React from "react";
import clsx from "clsx";

const Textbox = ({ type, placeholder, label, className, name, register, error, ref, options=[], min='' }) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label className="text-slate-800" htmlFor={name}>
            {label}
          </label>
        )}
        <div>
        {type === 'dropdown' ? (
          <select
            name={name}
            ref={ref}
            {...register}
            aria-invalid={error ? 'true' : 'false'}
            className={clsx(
              'bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300',
              className
            )}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            min={min}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
        )}
        </div>
        {error && (
          <span className="text-xs mt-0.5 text-[#f64949fe]">{error}</span>
        )}
    
      </div>
    );
  }
;

export default Textbox;
