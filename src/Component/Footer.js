import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   marginLeft:"300px", 
                   marginTop: "-50px" }}>
        Bán vé máy bay
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Sản phẩm</Heading>
            <FooterLink href="#">Profile</FooterLink>
            <FooterLink href="#">Chuyến bay</FooterLink>
            <FooterLink href="#">Khách sạn</FooterLink>
            <FooterLink href="#">Đưa đón sân bay</FooterLink>
            <FooterLink href="#">Biệt thự và căn hộ</FooterLink>
            <FooterLink href="#">Tour du lịch (trải nghiệm)</FooterLink>
            <FooterLink href="#">Thuê xe</FooterLink>
            <FooterLink href="#">Nhà hàng</FooterLink>
            <FooterLink href="#">Voucher</FooterLink>
            <FooterLink href="#">Combo tiết kiệm</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;