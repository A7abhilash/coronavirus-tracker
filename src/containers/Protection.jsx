import React from "react";
import doctor1 from "./../assets/doctor1.jpg";
function Protection() {
  return (
    <section id="protection">
      <div className="container">
        <div className="row mx-1 info">
          <h2 className="px-2">Take steps to protect youself and others</h2>
          <div className="col-md-8">
            <div className="my-2">
              <h5>Stay home if you are sick- </h5>
              <p> Stay home if you are sick, except to get medical care.</p>
            </div>
            <div className="my-2">
              <h5>Cover your mouth and nose- </h5>
              <p>
                With a tissue when you cough or sneeze (throw used tissues in
                the trash) or use the inside of your elbow.
              </p>
            </div>
            <div className="my-2">
              <h5>Wear a facemask- </h5>
              <p>
                You should wear a facemask when you are around other people
                (e.g., sharing a room or vehicle) and before you enter a
                healthcare provider’s.
              </p>
            </div>
            <div className="my-2">
              <h5>Clean AND disinfect frequently touched surfaces daily- </h5>
              <p>
                This includes phones, tables, light switches, doorknobs,
                countertops, handles, desks, toilets, faucets, and sinks.
              </p>
            </div>
            <div className="my-2">
              <h5>Clean the dirty surfaces- </h5>
              <p>Use detergent or soap and water prior to disinfection.</p>
            </div>
            <div className="my-2">
              <h5>Stay informed about the local COVID-19 situation- </h5>
              <p>
                Get up-to-date information about local COVID-19 activity from
                public health officials.
              </p>
            </div>
            <div className="my-2">
              <h5>Dedicated, lined trash can- </h5>
              <p>
                If possible, dedicate a lined trash can for the ill person. Use
                gloves when removing garbage bags, and handling & disposing of
                trash.
              </p>
            </div>
          </div>
          <div className="col-md-4 my-3 text-center">
            <img src={doctor1} alt="doctor" className="img-fluid" />
            <h4 className="my-3 my-md-4">
              -Always wear mask if you are going outside
            </h4>
            <h4 className="my-3 my-md-4">-Meet Friends/People Online</h4>
            <h4 className="my-3 my-md-4">-Go outside only if its neccessary</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Protection;
