import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Header from "../../Shear/Header/Header";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    <div className="banner-container">
      <Header />
      <div className="banner-text">
        <h1>I grow by helping people in need.</h1>
        <div className="search-container">
          <InputGroup className="mb-3">
            <FormControl
              className="searchInput"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              className="searchBtn"
              variant="outline-secondary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
