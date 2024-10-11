import { Box, List, ListItem, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

export default function Skills() {
  return (
    <Box>
      <SectionTitle title="Skills" />
      <List dense style={{ marginRight: "30px", marginTop: 0 }}>
        <ListItem>
          <Typography>
            <strong>Data Science:</strong> Python, TensorFlow, DVC,
            scikit-learn, LLMs
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>MLOps:</strong> Azure ML, VertexAI, TFX, MLFlow, TensorFlow
            Serving
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Cloud Engineering:</strong> GCP, Azure, Terraform, CI/CD
            (GitHub Actions, Azure Pipelines)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Data Engineering:</strong> dbt, BigQuery, Snowflake, SQL,
            Fivetran, Databricks
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <strong>Soft Skills:</strong> Agile Project Management, Product
            Development, Strategic Thinking
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
