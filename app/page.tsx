import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="p-4 max-w-6xl space-y-4">
      
      <div>
        <h1 className="text-3xl font-bold">Minimums</h1>
        <p className="text-zinc-500">Checkride progress tracker</p>
      </div>

      <div className="flex gap-6">

        {/* Left side - Flight Hours */}
        <div className="w-1/2 space-y-3">
          <h2 className="text-xl font-semibold">Flight Hours</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardHeader><CardTitle>Total Flight Time</CardTitle></CardHeader>
              <CardContent>
                <Progress value={62} />
                <p className="text-sm text-zinc-500 mt-2">25 of 40 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Dual Instruction</CardTitle></CardHeader>
              <CardContent>
                <Progress value={75} />
                <p className="text-sm text-zinc-500 mt-2">15 of 20 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Solo</CardTitle></CardHeader>
              <CardContent>
                <Progress value={70} />
                <p className="text-sm text-zinc-500 mt-2">7 of 10 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Cross-Country</CardTitle></CardHeader>
              <CardContent>
                <Progress value={60} />
                <p className="text-sm text-zinc-500 mt-2">3 of 5 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Night</CardTitle></CardHeader>
              <CardContent>
                <Progress value={100} />
                <p className="text-sm text-zinc-500 mt-2">3 of 3 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Instrument</CardTitle></CardHeader>
              <CardContent>
                <Progress value={33} />
                <p className="text-sm text-zinc-500 mt-2">1 of 3 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Checkride Prep</CardTitle></CardHeader>
              <CardContent>
                <Progress value={33} />
                <p className="text-sm text-zinc-500 mt-2">1 of 3 hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Solo Cross-Country</CardTitle></CardHeader>
              <CardContent>
                <Progress value={40} />
                <p className="text-sm text-zinc-500 mt-2">2 of 5 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side - Milestones */}
        <div className="w-1/2 space-y-3">
          <h2 className="text-xl font-semibold">Milestones</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardHeader><CardTitle>Documents</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Student Pilot Certificate</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Medical Certificate</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Photo ID</label>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Endorsements</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Pre-Solo Knowledge Test</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Pre-Solo Flight Endorsement</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Solo XC Endorsement</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Knowledge Test Endorsement</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Checkride Endorsement</label>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Tests</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox /><label>FAA Knowledge Test (Written)</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>Practical Test (Checkride)</label>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle>Flight Milestones</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox /><label>150nm Solo XC</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>3 Solo Towered Landings</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox /><label>10 Night Full-Stop Landings</label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>

    </div>
  );
}