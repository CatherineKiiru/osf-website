import React from "react";
import PropTypes from "prop-types";



function Breadcrumb(props) {
  return (
    <div>
      <section className="flex flex-wrap mt-[176px] mb-[86px] md:mt-[197px]">
        <div className="w-full text-white">
          <h1 className="text-center font-humane text-9xl md:text-[400px] uppercase font-medium">{props.name}</h1>
        </div>
      </section>
    </div>
  );
}

Breadcrumb.propTypes = {
  name: PropTypes.string.isRequired
};

export default Breadcrumb;
