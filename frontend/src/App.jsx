import React, { useState, useRef } from 'react'
import axios from 'axios'

export default function App() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [location, setLocation] = useState('Ontario')
  const [interests, setInterests] = useState([])
  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const pollRef = useRef(null)

  const toggle = (list, value, setter) => {
    if (list.includes(value)) setter(list.filter(v => v !== value))
    else setter([...list, value])
  }

  const stopPolling = () => {
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
  }

  const submit = async () => {
    setLoading(true)
    setResult(null)
    stopPolling()
    try {
      // Create async job
      const { data } = await axios.post('/api/jobs', {
        preferred_location: location,
        interests,
        goals,
        name
      })
      const jobId = data.job_id
      // Poll until done
      pollRef.current = setInterval(async () => {
        try {
          const j = await axios.get(`/api/jobs/${jobId}`)
          if (j.data.status === 'done') {
            stopPolling()
            setLoading(false)
            setResult(j.data)
          } else if (j.data.status === 'error') {
            stopPolling()
            setLoading(false)
            setResult({ error: j.data.error })
          }
        } catch (e) {
          stopPolling()
          setLoading(false)
          setResult({ error: e?.response?.data?.detail || e.message })
        }
      }, 1500)
    } catch (e) {
      setLoading(false)
      setResult({ error: e?.response?.data?.detail || e.message })
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">ApplicAid – Agentic Onboarding</h1>

      {step === 1 && (
        <div className="bg-white shadow rounded p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your name (optional)</label>
            <input className="border rounded px-3 py-2 w-full" value={name} onChange={e=>setName(e.target.value)} placeholder="Alex" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred location</label>
            <select className="border rounded px-3 py-2" value={location} onChange={e=>setLocation(e.target.value)}>
              <option>Ontario</option>
              <option>Quebec</option>
              <option>British Columbia</option>
              <option>Alberta</option>
              <option>Atlantic Canada</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={()=>setStep(2)}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white shadow rounded p-4 space-y-3">
          <div className="font-medium">Select interests</div>
          {['computer science','engineering','business','health sciences','arts','science'].map(tag => (
            <label key={tag} className="block">
              <input type="checkbox" className="mr-2" checked={interests.includes(tag)} onChange={()=>toggle(interests, tag, setInterests)} /> {tag}
            </label>
          ))}
          <div className="flex gap-2 mt-2">
            <button className="bg-gray-200 px-4 py-2 rounded" onClick={()=>setStep(1)}>Back</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={()=>setStep(3)}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white shadow rounded p-4 space-y-3">
          <div className="font-medium">Select goals</div>
          {['software engineering','research','entrepreneurship','medicine','finance'].map(tag => (
            <label key={tag} className="block">
              <input type="checkbox" className="mr-2" checked={goals.includes(tag)} onChange={()=>toggle(goals, tag, setGoals)} /> {tag}
            </label>
          ))}
          <div className="flex gap-2 mt-2">
            <button className="bg-gray-200 px-4 py-2 rounded" onClick={()=>setStep(2)}>Back</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={submit} disabled={loading}>{loading ? 'Fetching…' : 'Get recommendations'}</button>
          </div>
        </div>
      )}

      {result && (
        <div className="mt-6 bg-white shadow rounded p-4">
          <h2 className="font-semibold mb-2">Recommendations</h2>
          {result.error && <div className="text-red-600">{result.error}</div>}
          {!result.error && (
            <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(result.result || result, null, 2)}</pre>
          )}
        </div>
      )}
    </div>
  )
} 