import Home from "../views/home";
import Service from "../views/services";
import ContactUs from '../views/contactUs';
import IndividualService from "../views/individualService";
import AboutUs from '../views/aboutUs';
import ProjectDetails from "../views/projectDetails";
import CloudInfrastructure from '../views/CloudInfrastructure';
import CloudSecurity from '../views/CloudSecurity';
import InfraAutomation from "../views/InfraAutomation";
import MonitoringOperations from "../views/MonitoringOperations";
import KubernetesServerless from "../views/KubernetesServerless";
import InnovationPrototyping from "../views/InnovationPrototyping";

const routes = [
    { components: <Home/>, to: '/' },
    { components: <Service />, to: '/services' },
    { components: <ContactUs />, to: '/contactUs' },
    { components: <IndividualService />, to: '/individualService' },
    { components: <AboutUs />, to: '/aboutUs' },
    { components: <ProjectDetails />, to: '/projectDetails' },
    { components: <CloudInfrastructure />, to: '/cloudInfrastructure' },
    { components: <CloudSecurity />, to: '/cloudSecurity' },
    { components: <InfraAutomation />, to: '/infraAutomation' },
    { components: <MonitoringOperations />, to: "/monitoringOperations" },
    { components: <KubernetesServerless />, to: "/kubernetesServerless" },
    { components: <InnovationPrototyping />, to: "/innovationPrototyping" }
];

export default routes;
