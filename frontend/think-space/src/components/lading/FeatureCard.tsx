import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type FeatureCardProps = {
  icon: any;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
};

const FeatureCard = ({
  icon,
  title,
  description,
  bgColor,
  textColor,
}: FeatureCardProps) => (
  <article className={`${bgColor} mb-4 max-w-[400px] p-3`}>
    <FontAwesomeIcon icon={icon} className={`me-2 ${textColor}`} />
    <h3 className="font-semibold text-base inline-block">{title}</h3>
    <div className="ps-7">
      <p className="text-sm">{description}</p>
    </div>
  </article>
);

export default FeatureCard;
