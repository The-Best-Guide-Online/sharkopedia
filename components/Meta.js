import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'The Best Guide.Online',
  description: 'Get the absolute best product reviews and help finding the best products online while saving BIG.',
  keywords: 'reviews, shopping, advice, product, shopper, deal',
}
export default Meta
