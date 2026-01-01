import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TabsSection.css";

function TabsSection({ description, floorPlan, mapUrl }) {
  return (
    <Tabs className="tabs-section">
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Location</Tab>
      </TabList>

      <TabPanel>
        <p className="tab-description">{description}</p>
      </TabPanel>

      <TabPanel>
        {floorPlan ? (
          <img
            src={floorPlan}
            alt="Floor Plan"
            className="floor-plan-img"
          />
        ) : (
          <p>No floor plan available.</p>
        )}
      </TabPanel>

      <TabPanel>
        {mapUrl ? (
          <iframe
            src={mapUrl}
            title="Google Map"
            className="map-iframe"
            loading="lazy"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Map not available.</p>
        )}
      </TabPanel>
    </Tabs>
  );
}

export default TabsSection;
