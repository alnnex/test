import React from "react";
import Image from "next/image";

function Content() {
  return (
    <div className="d-flex justify-content-center">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Click to toggle Modal Component
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal Test Success
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>BootStrap Test Success if Modal Appears</h1>
              <div className="d-flex justify-content-center">
                <img className="h-50 w-50" src="https://imageio.forbes.com/blogs-images/rainerzitelmann/files/2019/05/GettyImages-481406443-1200x1785.jpg?format=jpg&width=960" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
