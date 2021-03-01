import { useState } from "react";
import { AddressLookup, Heading, Box, Button, TextField, Select } from "@cruk/cruk-react-components";

const Address = () => {
  const [validated, setValidated] = useState(false);
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("GBR");

  const handleAddressSelected = (address) => {
    setValidated(true);
    setLine1(address.Line1);
    setLine2(address.Line2);
    setLine3(address.Line3);
    setCity(address.City);
    setPostalCode(address.PostalCode);
  };

  return (
    <Box>
      <Heading h1>Address lookup</Heading>
      <fieldset>
        <legend>Your Address</legend>
        <p>
          Example wired up to a simple form, with controlled inputs. For
          production use we recommend using using Formic and Yup for form
          management and validation
        </p>
        <Box>
          <Select
            label="Country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="GBR">United Kingdom</option>
            <option value="ALA">Afghanistan</option>
            <option value="ALB">Albania</option>
            <option value="DZA">Algeria</option>
            {/* ... */}
            <option value="GGY">Guernsey</option>
          </Select>
        </Box>
        <Box>
          {["GBR", "GGY", "IMN", "JEY"].includes(country) ? (
            <AddressLookup
              apiKey="MG17-ZD93-FF33-KF13"
              countries={[country]}
              onAddressSelected={handleAddressSelected}
              onChange={(e) => {
                setValidated(false);
                setLine1(e.target.value);
              }}
              value={line1}
            />
          ) : (
            <TextField
              onChange={(e) => {
                setValidated(false);
                setLine2(e.target.value);
              }}
              required
              label="Home address"
              value={line1}
            />
          )}
        </Box>
        <Box>
          <TextField
            onChange={(e) => {
              setValidated(false);
              setLine2(e.target.value);
            }}
            label="Address line 2"
            value={line2}
          />
        </Box>
        <Box>
          <TextField
            onChange={(e) => {
              setValidated(false);
              setLine3(e.target.value);
            }}
            label="Address line 3"
            value={line3}
          />
        </Box>
        <Box>
          <TextField
            onChange={(e) => {
              setValidated(false);
              setCity(e.target.value);
            }}
            label="City"
            value={city}
            required
          />
        </Box>
        <Box>
          <TextField
            onChange={(e) => {
              setValidated(false);
              setPostalCode(e.target.value);
            }}
            label="Postcode"
            value={postalCode}
            required
          />
        </Box>
        <pre>{JSON.stringify({ validated }, null, 2)}</pre>
      </fieldset>
    </Box>
  );
};

export default Address;
