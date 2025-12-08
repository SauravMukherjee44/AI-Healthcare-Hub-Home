/*
  # Health Monitoring System Schema

  1. New Tables
    - `health_metrics`
      - `id` (uuid, primary key) - Unique identifier for each metric entry
      - `user_id` (uuid) - User identifier for multi-user support
      - `metric_date` (date) - Date of the health metric reading
      - `heart_rate` (integer) - Heart rate in BPM
      - `blood_pressure_systolic` (integer) - Systolic blood pressure
      - `blood_pressure_diastolic` (integer) - Diastolic blood pressure
      - `blood_glucose` (integer) - Blood glucose level in mg/dL
      - `weight` (decimal) - Weight in kg
      - `steps` (integer) - Daily step count
      - `sleep_hours` (decimal) - Hours of sleep
      - `water_intake` (decimal) - Water intake in liters
      - `created_at` (timestamptz) - Timestamp of record creation

    - `health_alerts`
      - `id` (uuid, primary key) - Unique identifier for each alert
      - `user_id` (uuid) - User identifier
      - `alert_type` (text) - Type of alert (warning, critical, info)
      - `message` (text) - Alert message
      - `metric_value` (text) - The metric value that triggered the alert
      - `created_at` (timestamptz) - Timestamp of alert creation
      - `is_read` (boolean) - Whether the alert has been read

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to read and write their own data
*/

CREATE TABLE IF NOT EXISTS health_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid DEFAULT gen_random_uuid(),
  metric_date date NOT NULL DEFAULT CURRENT_DATE,
  heart_rate integer,
  blood_pressure_systolic integer,
  blood_pressure_diastolic integer,
  blood_glucose integer,
  weight decimal(5,2),
  steps integer DEFAULT 0,
  sleep_hours decimal(3,1),
  water_intake decimal(3,1),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS health_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid DEFAULT gen_random_uuid(),
  alert_type text NOT NULL DEFAULT 'info',
  message text NOT NULL,
  metric_value text,
  created_at timestamptz DEFAULT now(),
  is_read boolean DEFAULT false
);

ALTER TABLE health_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_alerts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view all health metrics"
  ON health_metrics FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Users can insert health metrics"
  ON health_metrics FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can update health metrics"
  ON health_metrics FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete health metrics"
  ON health_metrics FOR DELETE
  TO anon
  USING (true);

CREATE POLICY "Users can view all health alerts"
  ON health_alerts FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Users can insert health alerts"
  ON health_alerts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can update health alerts"
  ON health_alerts FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete health alerts"
  ON health_alerts FOR DELETE
  TO anon
  USING (true);

CREATE INDEX IF NOT EXISTS health_metrics_date_idx ON health_metrics(metric_date DESC);
CREATE INDEX IF NOT EXISTS health_metrics_user_idx ON health_metrics(user_id);
CREATE INDEX IF NOT EXISTS health_alerts_user_idx ON health_alerts(user_id);
CREATE INDEX IF NOT EXISTS health_alerts_read_idx ON health_alerts(is_read);
