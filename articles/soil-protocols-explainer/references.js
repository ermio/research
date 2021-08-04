import { Link } from '@carbonplan/components'

export default {
  'avoided.comment': {
    note: 'Technically, increases to soil carbon stocks themselves include a mixture of carbon removal and avoiding carbon loss, though the combined effect of these mechanisms is often referred to as carbon removal.',
  },
  'sanderman.2010': {
    authors: 'J. Sanderman & J. A. Baldock',
    year: 2010,
    title:
      'Accounting for soil carbon sequestration in national inventories: a soil scientist’s perspective',
    journal: 'Environmental Research Letters',
    url: 'https://doi.org/10.1088/1748-9326/5/3/034003',
  },
  'ogle.2007': {
    authors: 'S M Ogle et al.',
    year: 2007,
    title:
      'An empirically based approach for estimating uncertainty associated with modelling carbon sequestration in soils',
    journal: 'Ecological Modeling',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S0304380007001251',
  },
  'grist.comment': {
    note: 'A recent article in Grist suggests that many soil projects today are non-additional.',
    url: 'https://grist.org/agriculture/us-carbon-removal-capture-offset-forests-farms-trees-soil/',
  },
  'schneider.2009': {
    authors: 'L Schneider',
    year: 2009,
    title:
      'Assessing the additionality of CDM projects: practical experiences and lessons learned',
    journal: 'Climate Policy',
    url: 'https://doi.org/10.3763/cpol.2008.0533',
  },
  'additionality.comment': {
    note: 'We note that asking projects for this kind of information is not particularly reliable, as of course projects have the incentive to make an unbalanced case. But that is exactly why protocols are supposed to help filter out the less-credible claims, and therefore why the lack of rigorous standards is a problem.',
  },
  'safeguards.update': {
    note: (
      <span>
        Our original analysis failed to identify a registry-wide Gold Standard
        safeguards policy, as explained further{' '}
        <Link
          sx={{ color: 'orange', '&:hover': { color: 'text' } }}
          href='/research/soil-protocols-explainer-gold-standard-response'
        >
          here
        </Link>
        . As a result, we assigned a score of 1/3 to Gold Standard. After
        reviewing the document we missed, we assigned a score of 3/3 to Gold
        Standard. In addition, although we had correctly identified the
        components of Plan Vivo's safeguards, we assigned a score of 2/3 instead
        of the 3/3 our rubric required. We regret both errors.
      </span>
    ),
  },
  'crediting.example': {
    note: 'For example, if only 80% of the climate benefits achieved by the project are from carbon removal, then a buyer who wants to make a carbon removal claim might consider purchasing 1.25 credits for every ton of carbon removal the buyer seeks to claim.',
  },
}
