import React, { useState } from "react";

const Apptask = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handleNext = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
    }
  };

  const handleAddBenefit = () => {
    const newBenefit = prompt("Enter a benefit:");
    if (newBenefit) {
      setBenefits([...benefits, newBenefit]);
    }
  };

  const handleAddDetail = () => {
    const attribute = prompt("Enter attribute:");
    const value = prompt("Enter value:");
    if (attribute && value) {
      setAdditionalDetails([...additionalDetails, { attribute, value }]);
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos([...photos, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        maxWidth: "900px",
        padding: "20px",
      }}
    >
      {currentPage === 1 && (
        <>
          <h1 style={{ textAlign: "center", color: "#007BFF" }}>Create Product</h1>


          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />

        
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          ></textarea>

          
          <p>Cover Photos (Upload up to 5 photos)</p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            {[...Array(5)].map((_, index) => (
              <label
                key={index}
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px dashed gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                +
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handlePhotoUpload}
                />
              </label>
            ))}
          </div>

          
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <option value="">Select Category</option>
            <option value="Digital Products">Digital Products</option>
            <option value="Services">Services</option>
            <option value="Others">Others</option>
          </select>
          <p>Benefits</p>
          <button
            onClick={handleAddBenefit}
            style={{
              padding: "10px",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Add Benefit
          </button>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <p>Additional Details</p>
          <button
            onClick={handleAddDetail}
            style={{
              padding: "10px",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "10px",
            }}
          >
            Add Detail
          </button>
          <ul>
            {additionalDetails.map((detail, index) => (
              <li key={index}>
                {detail.attribute}: {detail.value}
              </li>
            ))}
          </ul>

          
          <button
            onClick={handleNext}
            style={{
              width: "100%",
              padding: "15px",
              background: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Next
          </button>
        </>
      )}

      {currentPage === 2 && (
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          }}
        >
    
          <div style={{ flex: 2 }}>
            <h2 style={{ marginBottom: "20px", color: "#333" }}>
              {category || "Digital Products"}
            </h2>
            <div style={{ display: "grid", gap: "10px" }}>
              {photos.map((photo, index) => (
                photo && (
                  <div key={index} style={{ position: "relative" }}>
                    <img
                      src={photo}
                      alt={`Uploaded ${index + 1}`}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        border: "1px solid #ddd",
                      }}
                    />
                    <p
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      ${price || "N/A"}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <h3>{name || "Unnamed Product"}</h3>
            <p style={{ color: "#666", marginBottom: "20px" }}>{description}</p>
            <p><strong>Price:</strong> ${price || "N/A"}</p>
            <p><strong>Category:</strong> {category || "N/A"}</p>
            <p><strong>Benefits:</strong></p>
            <ul style={{ paddingLeft: "20px", color: "#555" }}>
              {benefits.length > 0 ? (
                benefits.map((benefit, index) => <li key={index}>{benefit}</li>)
              ) : (
                <li>No benefits added</li>
              )}
            </ul>
            <p><strong>Additional Details:</strong></p>
            <ul style={{ paddingLeft: "20px", color: "#555" }}>
              {additionalDetails.length > 0 ? (
                additionalDetails.map((detail, index) => (
                  <li key={index}>
                    {detail.attribute}: {detail.value}
                  </li>
                ))
              ) : (
                <li>No additional details</li>
              )}
            </ul>
            <button
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "10px",
                background: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Buy Now for ${price || "N/A"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apptask;

