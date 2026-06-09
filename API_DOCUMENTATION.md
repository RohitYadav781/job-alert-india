# Job Posting API Documentation

## Overview
This document provides comprehensive API documentation for developers integrating job posting functionality into the Sarkari Jobs application.

## Base URL
```
https://api.sarkarijobs.com/api
```

## Authentication
Currently, the API supports basic authentication. Include your API key in the request header:
```
Authorization: Bearer YOUR_API_KEY
```

---

## Endpoints

### 1. POST - Add New Job
**Endpoint:** `POST /jobs/add`

**Description:** Creates a new job posting.

**Request Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY
```

**Request Body:**
```json
{
  "title": "Software Developer",
  "position": "Senior",
  "qualification": "Bachelor's degree in Computer Science, 3+ years of experience",
  "organization": "Tech Corporation Ltd.",
  "location": "Bangalore, India",
  "description": "We are looking for experienced software developers to join our team. You will work on cutting-edge projects and lead technical teams.",
  "applyUrl": "https://example.com/careers/apply"
}
```

**Request Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | String | Yes | Job title (min: 3 characters) |
| `position` | String | Yes | Position level - Entry/Mid/Senior (min: 2 characters) |
| `qualification` | String | Yes | Required qualifications (min: 5 characters) |
| `organization` | String | Yes | Company/Organization name (min: 2 characters) |
| `location` | String | Yes | Job location |
| `description` | String | Yes | Detailed job description (min: 10 characters) |
| `applyUrl` | String | Yes | URL where candidates can apply |

**Response (Success - 201 Created):**
```json
{
  "success": true,
  "message": "Job posted successfully",
  "data": {
    "id": 123,
    "title": "Software Developer",
    "position": "Senior",
    "qualification": "Bachelor's degree in Computer Science, 3+ years of experience",
    "organization": "Tech Corporation Ltd.",
    "location": "Bangalore, India",
    "description": "We are looking for experienced software developers...",
    "applyUrl": "https://example.com/careers/apply",
    "createdAt": "2026-06-09T10:30:00Z",
    "updatedAt": "2026-06-09T10:30:00Z",
    "status": "published"
  }
}
```

**Response (Validation Error - 400 Bad Request):**
```json
{
  "success": false,
  "message": "Validation error",
  "errors": {
    "title": "Title is required and must be at least 3 characters",
    "qualification": "Qualification must be at least 5 characters"
  }
}
```

**Response (Unauthorized - 401):**
```json
{
  "success": false,
  "message": "Unauthorized. Invalid or missing API key."
}
```

**HTTP Status Codes:**
- `201 Created` - Job posted successfully
- `400 Bad Request` - Validation errors in request data
- `401 Unauthorized` - Invalid or missing authentication
- `500 Internal Server Error` - Server-side error

---

### 2. GET - Retrieve All Jobs
**Endpoint:** `GET /jobs`

**Description:** Retrieves all job postings with pagination support.

**Request Headers:**
```
Authorization: Bearer YOUR_API_KEY
```

**Query Parameters:**

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | Integer | 1 | Page number |
| `limit` | Integer | 20 | Number of jobs per page |
| `search` | String | - | Search jobs by title, organization, location |
| `position` | String | - | Filter by position level |

**Example Request:**
```
GET /jobs?page=1&limit=10&search=developer&position=senior
```

**Response (Success - 200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Software Developer",
      "position": "Senior",
      "qualification": "Bachelor's in CS",
      "organization": "Tech Corp",
      "location": "Bangalore",
      "description": "Senior developer position...",
      "applyUrl": "https://example.com/apply",
      "createdAt": "2026-06-09T10:30:00Z"
    },
    {
      "id": 2,
      "title": "Frontend Engineer",
      "position": "Mid-Level",
      "qualification": "2+ years experience",
      "organization": "Web Solutions",
      "location": "Mumbai",
      "description": "Frontend engineer position...",
      "applyUrl": "https://example.com/apply",
      "createdAt": "2026-06-08T15:45:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 150,
    "totalPages": 15
  }
}
```

---

### 3. GET - Retrieve Job by ID
**Endpoint:** `GET /jobs/:id`

**Description:** Retrieves detailed information about a specific job posting.

**Request Headers:**
```
Authorization: Bearer YOUR_API_KEY
```

**URL Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Integer | Yes | Job ID |

**Example Request:**
```
GET /jobs/123
```

**Response (Success - 200 OK):**
```json
{
  "success": true,
  "data": {
    "id": 123,
    "title": "Software Developer",
    "position": "Senior",
    "qualification": "Bachelor's degree in Computer Science, 3+ years of experience",
    "organization": "Tech Corporation Ltd.",
    "location": "Bangalore, India",
    "description": "We are looking for experienced software developers to join our team...",
    "applyUrl": "https://example.com/careers/apply",
    "createdAt": "2026-06-09T10:30:00Z",
    "updatedAt": "2026-06-09T10:30:00Z",
    "status": "published",
    "applicants": 45
  }
}
```

**Response (Not Found - 404):**
```json
{
  "success": false,
  "message": "Job not found"
}
```

---

### 4. PUT - Update Job
**Endpoint:** `PUT /jobs/:id`

**Description:** Updates an existing job posting.

**Request Headers:**
```
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY
```

**URL Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Integer | Yes | Job ID |

**Request Body:**
```json
{
  "title": "Senior Software Developer",
  "position": "Senior",
  "qualification": "Bachelor's degree in Computer Science, 4+ years of experience",
  "description": "Updated job description..."
}
```

**Response (Success - 200 OK):**
```json
{
  "success": true,
  "message": "Job updated successfully",
  "data": {
    "id": 123,
    "title": "Senior Software Developer",
    ...
  }
}
```

---

### 5. DELETE - Delete Job
**Endpoint:** `DELETE /jobs/:id`

**Description:** Deletes a job posting.

**Request Headers:**
```
Authorization: Bearer YOUR_API_KEY
```

**URL Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `id` | Integer | Yes | Job ID |

**Example Request:**
```
DELETE /jobs/123
```

**Response (Success - 200 OK):**
```json
{
  "success": true,
  "message": "Job deleted successfully"
}
```

---

## Error Handling

All API responses follow this error structure:

```json
{
  "success": false,
  "message": "Error message",
  "errors": {
    "field_name": "Specific error for this field"
  }
}
```

### Common Error Codes:
- `400` - Bad Request - Validation failed
- `401` - Unauthorized - Missing or invalid API key
- `403` - Forbidden - Access denied
- `404` - Not Found - Resource not found
- `500` - Internal Server Error - Server-side error

---

## Code Examples

### JavaScript/TypeScript Integration

```typescript
import { HttpClient } from '@angular/common/http';

export class JobAPIService {
  private apiUrl = 'https://api.sarkarijobs.com/api';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  addJob(jobData: any) {
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };

    return this.http.post(`${this.apiUrl}/jobs/add`, jobData, { headers });
  }

  getJobs(page: number = 1, limit: number = 20) {
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`
    };

    return this.http.get(`${this.apiUrl}/jobs?page=${page}&limit=${limit}`, { headers });
  }

  getJobById(id: number) {
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`
    };

    return this.http.get(`${this.apiUrl}/jobs/${id}`, { headers });
  }
}
```

### cURL Example

```bash
# Add a new job
curl -X POST https://api.sarkarijobs.com/api/jobs/add \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Software Developer",
    "position": "Senior",
    "qualification": "Bachelor'"'"'s degree in Computer Science",
    "organization": "Tech Corp",
    "location": "Bangalore",
    "description": "Job description...",
    "applyUrl": "https://example.com/apply"
  }'

# Get all jobs
curl -X GET https://api.sarkarijobs.com/api/jobs?page=1&limit=10 \
  -H "Authorization: Bearer YOUR_API_KEY"

# Get job by ID
curl -X GET https://api.sarkarijobs.com/api/jobs/123 \
  -H "Authorization: Bearer YOUR_API_KEY"
```

---

## Rate Limiting

- **Rate Limit:** 1000 requests per hour
- **Rate Limit Header:** `X-RateLimit-Remaining`
- **Reset Time Header:** `X-RateLimit-Reset`

When rate limit is exceeded, the API returns a `429 Too Many Requests` status code.

---

## Versioning

Current API Version: **v1**

Future versions will be available at:
- `https://api.sarkarijobs.com/api/v2`
- `https://api.sarkarijobs.com/api/v3`

---

## Support & Contact

For API support, please contact:
- Email: api-support@sarkarijobs.com
- Documentation: https://docs.sarkarijobs.com
- Status Page: https://status.sarkarijobs.com

---

## Changelog

### Version 1.0.0 (June 2026)
- Initial API release
- POST /jobs/add endpoint
- GET /jobs endpoint
- GET /jobs/:id endpoint
- PUT /jobs/:id endpoint
- DELETE /jobs/:id endpoint
