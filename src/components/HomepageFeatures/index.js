import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '一鍵安裝腳本',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Greasyfork 鏡像站提供流暢的使用者腳本安裝體驗，
        只需單擊即可讓您喜愛的腳本在瀏覽器中運行。
      </>
    ),
  },
  {
    title: '專注腳本體驗',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        無干擾瀏覽數以千計的審查過的使用者腳本，
        我們保留了原始 Greasyfork 的所有功能，
        同時提供更穩定的訪問體驗。
      </>
    ),
  },
  {
    title: '完整腳本庫存',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        鏡像站同步 Greasyfork 所有審查過的腳本資源，
        確保您能獲取最新、最全的腳本庫。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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