import React from "react";
import "./ZohoFormModal.css";

const ZohoFormModal = ({ onClose }) => {
  return (
    <div className="modalOverlay">
      <div className="modalBox">
        <button className="closeBtn" onClick={onClose}>×</button>

        <iframe
          src="https://forms.zohopublic.in/infotechhi1/form/FreeCloudAuditTechHiveWorld/formperma/9hjkdUKloJxsCBYCX_Oiu3EaEXIc0a1PFtE4AU4GQKU"
          width="100%"
          height="600"
          style={{ border: "none", borderRadius: "10px" }}
          title="Zoho Form"
        ></iframe>
      </div>
    </div>
  );
};

export default ZohoFormModal;
