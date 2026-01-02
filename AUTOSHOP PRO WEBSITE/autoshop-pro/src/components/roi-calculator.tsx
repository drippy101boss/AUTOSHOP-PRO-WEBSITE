"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ROICalculator() {
  const [avgTicket, setAvgTicket] = useState(350);
  const [callsPerDay, setCallsPerDay] = useState(20);
  const [missedCallRate, setMissedCallRate] = useState(35);
  const [hourlyWage, setHourlyWage] = useState(25);
  const [adminHoursPerDay, setAdminHoursPerDay] = useState(3.5);

  // Calculations
  const missedCallsPerDay = (callsPerDay * missedCallRate) / 100;
  const missedCallsPerMonth = missedCallsPerDay * 22; // working days
  const missedCallsPerYear = missedCallsPerMonth * 12;

  const revenueRecoveredMonthly = missedCallsPerMonth * avgTicket * 0.3; // 30% conversion
  const revenueRecoveredAnnually = revenueRecoveredMonthly * 12;

  const timeSavingsMonthly = adminHoursPerDay * 22 * hourlyWage * 0.75; // 75% time saved
  const timeSavingsAnnually = timeSavingsMonthly * 12;

  const totalAnnualIncrease = revenueRecoveredAnnually + timeSavingsAnnually;

  return (
    <Card className="bg-white border-2 shadow-xl">
      <CardHeader className="bg-gradient-to-br from-slate-50 to-gray-100 border-b">
        <CardTitle className="text-2xl text-center">Calculate Your ROI</CardTitle>
        <p className="text-center text-gray-600 text-sm">
          See how much revenue you're leaving on the table
        </p>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg mb-4">Your Shop Info</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Ticket Size
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                <Input
                  type="number"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="pl-7"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Calls Per Day
              </label>
              <Input
                type="number"
                value={callsPerDay}
                onChange={(e) => setCallsPerDay(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Missed Call Rate (%)
              </label>
              <Input
                type="number"
                value={missedCallRate}
                onChange={(e) => setMissedCallRate(Number(e.target.value))}
                max="100"
              />
              <p className="text-xs text-gray-500 mt-1">Industry average: 30-40%</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hourly Wage (Admin Work)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                <Input
                  type="number"
                  value={hourlyWage}
                  onChange={(e) => setHourlyWage(Number(e.target.value))}
                  className="pl-7"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Hours Per Day
              </label>
              <Input
                type="number"
                step="0.5"
                value={adminHoursPerDay}
                onChange={(e) => setAdminHoursPerDay(Number(e.target.value))}
              />
              <p className="text-xs text-gray-500 mt-1">Time spent on calls, scheduling, follow-ups</p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <h3 className="font-bold text-lg mb-4">Your Potential Gains</h3>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20">
              <div className="text-sm text-gray-600 mb-1">Missed Calls Per Year</div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.round(missedCallsPerYear).toLocaleString()}
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border">
              <div className="text-sm text-gray-600 mb-1">Revenue from Captured Leads</div>
              <div className="text-2xl font-bold text-green-600">
                ${Math.round(revenueRecoveredAnnually).toLocaleString()}
                <span className="text-sm text-gray-500 font-normal">/year</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ${Math.round(revenueRecoveredMonthly).toLocaleString()}/month
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border">
              <div className="text-sm text-gray-600 mb-1">Time Savings Value</div>
              <div className="text-2xl font-bold text-green-600">
                ${Math.round(timeSavingsAnnually).toLocaleString()}
                <span className="text-sm text-gray-500 font-normal">/year</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                ${Math.round(timeSavingsMonthly).toLocaleString()}/month
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-emerald-500 rounded-lg p-6 text-white shadow-lg">
              <div className="text-sm font-medium mb-2">Total Annual Increase</div>
              <div className="text-4xl font-bold">
                ${Math.round(totalAnnualIncrease).toLocaleString()}
              </div>
              <div className="text-sm mt-2 opacity-90">
                ${Math.round(totalAnnualIncrease / 12).toLocaleString()} per month
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-600 italic">
                Results based on 30% lead conversion rate and 75% time automation
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
