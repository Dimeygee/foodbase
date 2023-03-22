
import OnBoarding from "./onboarding";
import { OnboardingComponentSvg_one } from "./onboardingsvg/onboardingsvg";



export const OnBoardingScreenOne = () => <OnBoarding 
        SvgImage={<OnboardingComponentSvg_one />} 
        article1="Browse Your Menu & Order Directly"
        article2="Our app can send you everywhere, even space. For only $2.99 per month"
        marginTop={80}
    />

