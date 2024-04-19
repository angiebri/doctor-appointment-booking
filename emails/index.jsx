import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import moment from "moment";

const baseUrl = process.env.VERCEL_URL
  ? `https://angiebri.space`
  : "http://localhost:3000";

export const EmailTemplate = ({ UserName, Time, Date, doctorName }) => {
  //console.log("userName", UserName);
  return (
    <Html>
      <Head />
      <Preview>Your Appointment with Doctor has booked.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/logo.svg`}
            width="170"
            height="50"
            alt="Medcorder"
            style={logo}
            priority="true"
          />
          <Text style={paragraph}>Hi {UserName},</Text>
          <Text style={paragraph}>
            Your Appointment with doctor <b>{doctorName}</b> has booked on{" "}
            <b>{moment(Date).format("DD-MMM-YYYY")}</b> at <b>{Time}</b>
          </Text>
          <Section style={btnContainer}>
            <Button style={button} href={`${baseUrl}/my-booking`}>
              My Booking
            </Button>
          </Section>
          <Text style={paragraph}>Best, The Medcorder team</Text>
          <Hr style={hr} />
          <Text style={footer}>Developed by Angiebri</Text>
        </Container>
      </Body>
    </Html>
  );
};
export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#01abaa",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
