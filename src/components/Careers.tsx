import React, { useState, useEffect } from 'react';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import jobsData from '../data/careers.json';

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
}

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setJobs(jobsData.jobs);
      setLoading(false);
    }, 1000);
  }, []);

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  if (loading) {
    return (
      <div id="careers" className="bg-gray-50 py-24 min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded max-w-md mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="careers" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Join Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            We're always looking for talented individuals to help us shape the future of technology
          </p>
        </div>

        <div className="mt-20">
          {jobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No Current Openings</h3>
              <p className="mt-2 text-gray-500">
                We don't have any open positions right now, but please check back later.
                You can also send your resume to careers@mfgdigital.tech
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleJob(job.id)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                        {job.department}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {job.location}
                        </div>
                      </div>
                      {expandedJob === job.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Requirements:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Careers;