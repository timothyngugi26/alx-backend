#!/usr/bin/yarn dev
import { createQueue } from 'kue';

// Create a queue with the specified name
const queue = createQueue({ name: 'push_notification_code' });

// Create a job with data for the queue 'push_notification_code'
const job = queue.create('push_notification_code', {
  phoneNumber: '07045679939',
  message: 'Account registered',
});

// Add event listeners for the job
job
  .on('enqueue', () => {
    console.log(`Notification job created: ${job.id}`);
  })
  .on('complete', () => {
    console.log('Notification job completed');
  })
  .on('failed attempt', (errorMessage) => {
    console.error(`Notification job failed on attempt: ${errorMessage}`);
  })
  .on('failed', (errorMessage) => {
    console.error(`Notification job permanently failed: ${errorMessage}`);
  });

// Save the job to the queue
job.save((err) => {
  if (err) {
    console.error('Failed to save job:', err);
  } else {
    console.log('Job successfully saved to queue.');
  }
});

