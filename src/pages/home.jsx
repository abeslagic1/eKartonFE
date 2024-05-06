import FeaturedInfo from "../components/featuredInfo";
import WidgetLG from "../components/widgetLG";
import WidgetSM from "../components/widgetSM";
const Home = () => {
  return (
    <section className="p-3">
      <div className="flex gap-5 mb-6">
        <FeaturedInfo type="Patients" value="1,200"></FeaturedInfo>
        <FeaturedInfo type="Doctors" value="3,200"></FeaturedInfo>
        <FeaturedInfo type="Consultations" value="5,000"></FeaturedInfo>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 ">
          <WidgetSM />
        </div>
        <div className="flex-[2_2_0%]">
          <WidgetLG />
        </div>
      </div>
    </section>
  );
};

export default Home;
