import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple',
    Svg: require('@site/static/img/simple.svg').default,
    description: (
      <>
        Each entry to the log is a markdown file.
      </>
    ),
  },
  {
    title: 'Focused',
    Svg: require('@site/static/img/open.svg').default,
    description: (
      <>
        Git hooks allow me to write my entries without worrying about deployment. Just write, commit, push, and forget.
      </>
    ),
  },
  {
    title: 'Accessible',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
       Github pages allows anyone to view my logs, anywhere.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
