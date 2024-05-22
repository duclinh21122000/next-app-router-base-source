'use client'

import AppLayoutCSR from '@/components/layouts/app-layout-csr'
import { useGetListCharacterQuery } from '@/services/api/demo'

export default function Home() {
  const { data, isLoading } = useGetListCharacterQuery({
    page: 1,
  })

  return (
    <AppLayoutCSR>
      <div className="p-6">
        {isLoading ? (
          <div>Loading....</div>
        ) : (
          <div>
            {data.results.map((item: any, idx: number) => (
              <div key={idx}>{item.name}</div>
            ))}
          </div>
        )}
      </div>
    </AppLayoutCSR>
  )
}
