import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./TabsSection.css";

function TabsSection({ description, floorPlan, mapUrl }) {
  return (
    <Tabs className="tabs-section">
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Map</Tab>
      </TabList>

      <TabPanel>
        <p>{description}</p>
      </TabPanel>

      <TabPanel>
        <img src={floorPlan} alt="Floor Plan" className="floor-plan" />
      </TabPanel>

      <TabPanel>
        <iframe
          src={mapUrl}
          title="Google Map"
          className="map-iframe"
          loading="lazy"
        ></iframe>
      </TabPanel>
    </Tabs>
  );
}

export default TabsSection;
