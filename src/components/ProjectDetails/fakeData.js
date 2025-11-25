import bannerImg from '../../assets/projectDetails/banner.png';
import bannerImg2 from '../../assets/projectDetails/banner2.png';
import bannerImg3 from '../../assets/projectDetails/banner3.png';
import bannerImg4 from '../../assets/projectDetails/banner4.png';
import bannerImg5 from '../../assets/projectDetails/banner5.png';
import bannerImg6 from '../../assets/projectDetails/banner6.png';
import cardImg1 from '../../assets/projectDetails/card1.png';
import cardImg2 from '../../assets/projectDetails/card2.png';
import cardImg3 from '../../assets/projectDetails/card3.png';
import cardImg4 from '../../assets/projectDetails/card4.png';
import cardImg5 from '../../assets/projectDetails/card5.png';
import cardImg6 from '../../assets/projectDetails/card6.png';
import projectImg1 from '../../assets/projectDetails/project1.png';
import projectImg2 from '../../assets/projectDetails/project2.png';

const fakeData = [
    {
        id: 1,
        banner: bannerImg,
        title: 'Project Details',
        heading: 'Large-Scale Migration from VPC Peering to AWS Transit Gateway',
        subHeading: 'A high-growth enterprise modernizes its cloud network by replacing 100+ VPC peering connections with a scalable, secure, and centralized Transit Gateway architecture.',
        card: {
                client: 'Paula Ramsey',
                categories: 'Cloud',
                date: '23 September 2022',
                tags: 'AWS, Transit Gateway',
                img: cardImg1
            
            },
        para1: 'The organization operated 50+ AWS accounts using a full-mesh VPC peering model, with over 100 connections creating high complexity, operational overhead, and limited scalability. The enterprise required a centralized, secure, and future-ready network foundation to support rapid expansion. Fragmented routing made troubleshooting slow and inconsistent, affecting deployment timelines. Teams struggled to maintain uniform route tables, security controls, and connectivity rules across accounts, and the lack of centralized visibility made cost monitoring and governance increasingly challenging.',
        para2: 'Tech Hive World implemented AWS Transit Gateway (TGW) to replace the complex mesh with a scalable hub-and-spoke model. Over 50 VPCs were migrated using automated provisioning through Terraform, AWS CDK, and Python. AWS Control Tower and RAM simplified multi-account governance and resource sharing.',
        para3: 'Security and monitoring were strengthened using GuardDuty, CloudWatch, and VPC Flow Logs. Fine-grained IAM controls and automated compliance checks improved governance, ensuring consistent security and visibility across all AWS accounts.',
        summary: 'The migration significantly simplified the organization’s cloud network by reducing complexity by 80% and improving overall routing visibility. With the introduction of AWS Transit Gateway, more than 50 VPCs were connected through a scalable, centrally governed architecture. Automated provisioning and consistent security controls minimized manual effort while enhancing the organization’s cloud security posture. The new infrastructure also created a strong, flexible backbone capable of supporting future multi-region expansion and seamless operational growth.',
        img1: projectImg1,
        img2: projectImg2,
    },
    {
        id: 2,
        banner: bannerImg2,
        title: 'Project Details',
        heading: 'AWS Control Tower Implementation for a Large Financial Organization',
        subHeading: 'A secure, compliant, and automated multi-account AWS Landing Zone built for financial-grade governance and scalability.',
        card: {
                client: 'Paula Ramsey',
                categories: 'Interior',
                date: '23 September 2020',
                tags: 'branding, vintage, creative',
                img: cardImg2
            
            },
        para1: 'The financial organization was rapidly expanding its cloud footprint across multiple AWS accounts, resulting in inconsistent security controls, fragmented governance, and manual, error-prone provisioning processes. Compliance with strict financial regulations became increasingly difficult due to the lack of centralized visibility and standardized controls. Teams struggled to maintain uniform IAM, logging, and network configurations across business units. The enterprise needed a secure, scalable, and automated multi-account environment that ensured consistent governance, compliance, and operational efficiency across all AWS accounts.',
        para2: 'Tech Hive World implemented a fully governed AWS Control Tower Landing Zone using a structured multi-OU design. Automated account provisioning through Account Factory standardized IAM roles, VPC baselines, guardrails, and logging. Mandatory security and compliance controls were enforced through SCPs, Config Rules, and centralized governance frameworks.',
        para3: 'Security was strengthened using GuardDuty, Security Hub, and Access Analyzer, with automated alerts through SNS and Slack. Central dashboards improved visibility into compliance drift, guardrail violations, and overall security posture across all accounts.',
        summary: 'The AWS Control Tower implementation delivered a fully standardized and compliant multi-account environment for the financial organization. Governance was unified across more than 50 AWS accounts with strict guardrails, centralized logging, and automated provisioning. Security posture improved through continuous monitoring, alerting, and enforced best practices. Manual operations were reduced significantly, enabling faster onboarding and audit readiness. This scalable Landing Zone now provides a secure, automated, and future-ready cloud foundation for long-term organizational growth.',
        img1: projectImg1,
        img2: projectImg2,
    },
    {
        id: 3,
        banner: bannerImg3,
        title: 'Project Details',
        heading: 'Cloud Cost Optimization for a Healthcare Technology Client',
        subHeading: 'A structured FinOps framework that reduced cloud costs while maintaining healthcare-grade security and performance.',
        card: {
                client: 'Paula Ramsey',
                categories: 'Interior',
                date: '23 September 2020',
                tags: 'branding, vintage, creative',
                img: cardImg3
            
            },
        para1: 'The healthcare technology company faced rapidly increasing AWS costs across multiple environments, creating challenges in budgeting and long-term financial planning. As a HIPAA-aligned organization, they needed to optimize cloud spending without affecting security, reliability, or performance. Over-provisioned compute and storage resources, inconsistent tagging, idle workloads, and inefficient S3 lifecycle policies significantly inflated monthly bills. The lack of centralized cost visibility further complicated operational decisions, demanding a structured FinOps approach to regain control and sustain predictable cloud costs.',
        para2: 'Tech Hive World implemented a structured FinOps framework combining visibility, automation, and engineering best practices. Centralized dashboards improved insight into cost drivers, while compute and database right-sizing reduced unnecessary spending. Automated lifecycle policies, environment cleanup, and standardized tagging ensured long-term governance and sustained cost optimization across all workloads.',
        para3: 'Security and compliance remained intact through HIPAA-aligned guardrails, tagging standards, and continuous monitoring. Automated anomaly alerts and clear allocation reporting strengthened financial oversight while maintaining reliable, efficient, and accountable cloud operations across all environments.',
        summary: 'The FinOps optimization program delivered significant financial and operational benefits for the healthcare organization. Monthly AWS costs dropped by 28%, while compute spending fell by up to 40% and storage costs decreased by 46%. Centralized dashboards improved visibility across teams, enabling clearer budgeting and accountability. Automated policies, tagging standards, and guardrails ensured continuous cost control without compromising HIPAA compliance. The resulting FinOps model established a scalable, efficient, and predictable cloud cost management framework.',
        img1: projectImg1,
        img2: projectImg2,
    },
    {
        id: 4,
        banner: bannerImg4,
        title: 'Project Details',
        heading: 'Preventive Security with Checkov for AWS Infrastructure',
        subHeading: 'A fully automated IaC security framework ensuring every Terraform deployment is compliant, secure, and production-ready.',
        card: {
                client: 'Paula Ramsey',
                categories: 'Interior',
                date: '23 September 2020',
                tags: 'branding, vintage, creative',
                img: cardImg4
            
            },
        para1: 'A rapidly growing technology company expanding its AWS footprint needed a preventive way to enforce consistent Terraform security across many engineering teams. The adoption of more than thirty-five AWS services made manual reviews slow and inconsistent, causing security gaps and compliance drift. Lack of preventive guardrails meant issues were discovered late in the deployment cycle, increasing risk and rework. The organization required centralized IaC visibility and automated pre-deployment checks to block misconfigurations early and ensure secure, compliant infrastructure changes.',
        para2: 'Tech Hive World integrated Checkov into all CI/CD pipelines to automatically scan Terraform plans and block insecure configurations. A custom security policy library ensured consistent baselines across engineering teams, while dashboards provided visibility into violations, severity trends, and compliance posture. Automated remediation guidance accelerated secure development.',
        para3: 'Preventive scanning eliminated high-risk misconfigurations before deployment. Standardized security controls reduced manual review effort, while dashboards improved oversight across teams. The solution strengthened compliance and streamlined development workflows.',
        summary: 'The Checkov-based preventive security framework transformed the organization’s IaC governance. Every Terraform plan is now scanned before deployment, ensuring no high-severity issues reach production. Security baselines are consistent across all teams, and CI/CD integration significantly reduced manual reviews. Compliance dashboards improved organizational visibility, while automated remediation suggestions accelerated development. The solution established a secure, automated, and audit-ready workflow that reduced operational risk and enhanced developer velocity across all cloud projects.',
        img1: projectImg1,
        img2: projectImg2,
    },
    {
        id: 5,
        banner: bannerImg5,
        title: 'Project Details',
        heading: 'Multi-Region Disaster Recovery Blueprint Prototype',
        subHeading: 'A fully functional DR prototype enabling cross-region resilience, automated failover, and validated RTO/RPO for mission-critical healthcare workloads.',
        card: {
                client: 'Paula Ramsey',
                categories: 'Interior',
                date: '23 September 2020',
                tags: 'branding, vintage, creative',
                img: cardImg5
            
            },
        para1: 'The digital healthcare platform operated entirely within a single AWS region, creating significant resilience risks for mission-critical patient-facing applications. With strict uptime requirements and no automated failover or cross-region data protection, leadership needed a real working DR prototype rather than theoretical designs. Large RDS databases lacked replication, S3 buckets had no cross-region protections, and the team had zero visibility into achievable RTO and RPO metrics. A practical, low-cost, multi-region DR strategy was urgently required for validation.',
        para2: 'Tech Hive World built a functional DR Blueprint Prototype demonstrating cross-region failover using cost-effective DR patterns. The solution included automated S3 replication, RDS snapshot and replica strategies, AMI and EBS replication, Route 53 failover routing, and Lambda-based orchestration. CloudWatch alarms enabled event-driven automation across regions.',
        para3: 'Failover automation validated real RTO and RPO performance while ensuring essential workloads recovered in a secondary region. The prototype provided operational clarity, architectural confidence, and a repeatable model for full production DR implementation.',
        summary: 'The DR prototype gave leadership a working multi-region recovery model with validated resilience metrics. Core workloads achieved an RTO of approximately fifteen minutes and an RPO under five minutes. Automated routing, replication, and orchestration established a clear blueprint for production rollout. With full visibility into DR behaviors, costs, and failover workflows, the organization significantly reduced business risk and gained a scalable, low-maintenance approach to protecting patient-critical systems from regional AWS outages.',
        img1: projectImg1,
        img2: projectImg2,
    },
    {
        id: 6,
        banner: bannerImg6,
        title: 'Project Details',
        heading: 'Detective Security Controls Implementation with Wiz for AWS Infrastructure',
        subHeading: 'Strengthening AWS cloud visibility, continuous monitoring, and detective controls across 35+ AWS services using Wiz.',
        card: {
                client: 'Paula Ramsey',
                categories: 'Interior',
                date: '23 September 2020',
                tags: 'branding, vintage, creative',
                img: cardImg6
            
            },
        para1: 'The client, a leading enterprise running large-scale workloads across multiple AWS accounts, needed stronger cloud visibility and detective security coverage. With 35+ AWS services in use, they lacked a unified view of vulnerabilities, misconfigurations, and compliance gaps. Tech Hive World was brought in to design and implement a centralized detective security framework using Wiz. The objective was to establish continuous monitoring, contextual risk detection, and automated visibility across the entire cloud environment to improve security posture.',
        para2: 'The client faced challenges such as limited multi-account visibility, delayed detection of misconfigurations, and inconsistent compliance checks. Manual processes made it difficult to track CIS, NIST, and ISO requirements. Misconfigurations like public S3 buckets, weak IAM roles, and unencrypted storage often remained unnoticed until later stages.',
        para3: 'Tech Hive World deployed Wiz as a unified detective control platform, enabling real-time monitoring, continuous scanning, and contextual risk detection across AWS accounts. Integrations covered major services, workflows, and compliance frameworks.',
        summary: 'Tech Hive World delivered a fully integrated cloud security framework powered by Wiz, offering centralized visibility, continuous monitoring, and automated compliance evaluation across 35+ AWS services. The implementation improved detection speed, aligned alerts with existing workflows, and enhanced DevSecOps collaboration. Within the first month, the client resolved 300+ critical misconfigurations and achieved complete monitoring coverage, transforming their cloud security posture from reactive to proactive with measurable improvements in risk reduction and operational confidence.',
        img1: projectImg1,
        img2: projectImg2,
    },
];
export default fakeData;