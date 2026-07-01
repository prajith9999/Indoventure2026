import { Navigate } from 'react-router-dom'
import InfoPageLayout from '../components/InfoPageLayout'
import { INFO_PAGES } from '../data/infoPages'

function InfoPage({ pageKey }) {
  const page = INFO_PAGES[pageKey]

  if (!page) {
    return <Navigate to="/" replace />
  }

  return <InfoPageLayout {...page} />
}

export default InfoPage
