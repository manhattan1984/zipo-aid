import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

const FAQS = () => {
  const { t } = useTranslation();

  const FaqItem = ({ title, text, index }) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
      <Accordion
        sx={{
          my: 2,
        }}
        expanded={expanded === "panel" + index}
        onChange={handleChange("panel" + index)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"panel" + index + "bh-content"}
          id={"panel" + index + "bh-header"}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Raleway",
              fontWeight: "bolder",
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  const faqs = [
    {
      text: t("faq1-b"),
      title: t("faq1-t") ,
    },
    {
      text: t("faq2_b"),
      title: t("faq2_t"),
    },
    {
      text: t("faq3_b"),
      title: t("faq3_t"),
    },
    {
      text: t("faq4_b"),
      title: t("faq4_t"),
    },
    {
      text: t("faq5_b"),
      title: t("faq5_t"),
    },
    {
      text: t("faq6_b"),
      title: t("faq6_t"),
    },
  ];
  return (
    <Container>
      <Typography my={2} variant="h6" textAlign="center">
        {t("faqs")}
      </Typography>
      <Typography variant="h3" textAlign="center">
        {t("faq_full")}
      </Typography>
      <Typography variant="h3" textAlign="center">
        {t()}
      </Typography>
      {faqs.map(({ text, title }, index) => (
        <>
          <FaqItem key={index} text={text} title={title} index={index + 1} />
        </>
      ))}
    </Container>
  );
};

export default FAQS;
