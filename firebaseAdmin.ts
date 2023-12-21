// import admin from "firebase-admin";
// import { getApps } from "firebase-admin/app";
// const FIREBASE_SERVICE_ACCOUNT_KEY = {
//   type: "service_account",
//   project_id: "test-c30d2",
//   private_key_id: "438f7f7e67f8436de81161cc23a3b94c0a6b18f8",
//   private_key:
//     "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCUuDiaafwJGw8Y\nVviyZb2VdnvyQi5V/tTX2wedehXQ1U1xnCMmprYagzs0+KRCr0gv3POeeUGvV3Qb\ntS81760ePSxGRQGvKFx1ag3igAc5VFkE8/1eFfIpIXhHigHk09ix2XbQLPyphTR4\nCoxE12ZwQObRwbicpGA0zcDyMsMuS/PQ8TFub9Vc+p1H3FmG17g2oDt1qcZw0r22\n9EmlGC94EXqRuJXVSIjCCIS1/bYX774r3AqFe0sVBJjqAYz+/qu0nnqs7FtaaORW\nqjb/S11QVStJkwMCTpYvcZC/gAlF7bmo80KMyJX3jo3D+8cmrQXgIa6ZXxzbxkt1\nUi6xjTrjAgMBAAECggEAEYIkq80pblsAqnFmwv3mVWfHDMzMzrP7E9SF73y1f8n0\n3ZivrLe4vaNQf5p8IBupqHTfO3t0B7QIh9CLV9K5M1OpWDZ8jcX3KJ2NN+qxrwam\nmkYtQHvd8AiwM9/j/DASlVGQQs7hCgYUGMPJIrunJDUH147ycIKLjvvgKMNgJh1+\nCav78fTviWQlLKYhbU25aWTF89WwYRQ9a67eL2KWBPC1r+k3vdSiJZy/4ELs5Sb4\nKS77Klo0Yt1Jkh88hNX406QABZoMFBMyUYvuux5kBj4wBoEspnSmon2eJiQMCS/G\nRfjhPWRiEYkGCTMe/KhWnRf6GKxc9zU4ldGB1CoTiQKBgQDG+nDHmDaDW3feT3eo\nzXuIoNTcAAjwqVfNDM4sC0L3vUpj+EcqHCrKSil0HU/5ePPYNlBbuGDB9DsWlVSV\nVSxntZKZ2uVpHKwpG3qk7Uletuo2HQSvCu3y4yhrPUXQghmlnDtyosBNd8yY2mh6\nTWy20mbwugVRD21EN9DgNZ1iWwKBgQC/VqzSKBU0RAwPH5GYzbHENfsseZJtiRTU\nKmV+ZSJUwt2yOdrP15AduEKwJFK4DmPj9ppJeaCO5itCaZ5dE1V8qfZOS1jtjwkd\nfE9MSorbbJFrxPpj1q9rs0SYonSL1v8Dt4o7gf4U6CwDmo1Wk+TwU7x18y1Yz4se\ny/XQKY3gGQKBgQC/DdNiYq3dHOOQyz77DypRexRHlaT/56oNkgEY20tW8yNNsCQs\ns9UGXYVGH6sdwFxqu2QXXYdSVD60JXiM1raHchmsrzjd35ES+3aci9aKIhnrEZvg\nsx7cu+6gYbn6RiF4GfYe0VTSTXhfQD9XR6ZeONJszEC0n5psCSf/UJuoxwKBgQCu\nYECqWqtQcb+HvN6FItkil4uscbNYLjkUTvsmYOcT1nATMJTRHISUAUyNmNzmLv8s\nT5823SjNcsj0Aqu36ZncPk1h91s5TUUiYRsnzTuVU/GIBQGpIYvHnJ4keNG8bBkG\n+yt4pjS4Owt50U2EHM7lk3rLB+9I5ATG8Vy59FT/aQKBgGU6+VhOQQJwAWLxlU6m\n5YHXm+C2qC/kTiwC0Wl7z3DGgJZsnMG22FYbUdHhkchMaYd9O/okwhY7ufjIKjgw\neZ8EqjYIlmIvffPELucRwbnX1Sf3KQM+Rnc7rrCwHY/r4Vx4ySbbD9owwSOwW/5M\n6a1YMiAQ29obA3J684BPtyD1\n-----END PRIVATE KEY-----\n",
//   client_email: "firebase-adminsdk-ft5ch@test-c30d2.iam.gserviceaccount.com",
//   client_id: "116885885568960268978",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ft5ch%40test-c30d2.iam.gserviceaccount.com",
//   universe_domain: "googleapis.com",
// };
// const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY as string);

// if (!getApps().length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// const adminDb = admin.firestore();
// export { adminDb };

//DUE TO FINAL MOMENT ERROR, I HAD TO PUT THIS HERE, INSTEAD OF ENV FILE
import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
const FIREBASE_SERVICE_ACCOUNT_KEY = {
  type: "service_account",
  project_id: "test-c30d2",
  private_key_id: "438f7f7e67f8436de81161cc23a3b94c0a6b18f8",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCUuDiaafwJGw8Y\nVviyZb2VdnvyQi5V/tTX2wedehXQ1U1xnCMmprYagzs0+KRCr0gv3POeeUGvV3Qb\ntS81760ePSxGRQGvKFx1ag3igAc5VFkE8/1eFfIpIXhHigHk09ix2XbQLPyphTR4\nCoxE12ZwQObRwbicpGA0zcDyMsMuS/PQ8TFub9Vc+p1H3FmG17g2oDt1qcZw0r22\n9EmlGC94EXqRuJXVSIjCCIS1/bYX774r3AqFe0sVBJjqAYz+/qu0nnqs7FtaaORW\nqjb/S11QVStJkwMCTpYvcZC/gAlF7bmo80KMyJX3jo3D+8cmrQXgIa6ZXxzbxkt1\nUi6xjTrjAgMBAAECggEAEYIkq80pblsAqnFmwv3mVWfHDMzMzrP7E9SF73y1f8n0\n3ZivrLe4vaNQf5p8IBupqHTfO3t0B7QIh9CLV9K5M1OpWDZ8jcX3KJ2NN+qxrwam\nmkYtQHvd8AiwM9/j/DASlVGQQs7hCgYUGMPJIrunJDUH147ycIKLjvvgKMNgJh1+\nCav78fTviWQlLKYhbU25aWTF89WwYRQ9a67eL2KWBPC1r+k3vdSiJZy/4ELs5Sb4\nKS77Klo0Yt1Jkh88hNX406QABZoMFBMyUYvuux5kBj4wBoEspnSmon2eJiQMCS/G\nRfjhPWRiEYkGCTMe/KhWnRf6GKxc9zU4ldGB1CoTiQKBgQDG+nDHmDaDW3feT3eo\nzXuIoNTcAAjwqVfNDM4sC0L3vUpj+EcqHCrKSil0HU/5ePPYNlBbuGDB9DsWlVSV\nVSxntZKZ2uVpHKwpG3qk7Uletuo2HQSvCu3y4yhrPUXQghmlnDtyosBNd8yY2mh6\nTWy20mbwugVRD21EN9DgNZ1iWwKBgQC/VqzSKBU0RAwPH5GYzbHENfsseZJtiRTU\nKmV+ZSJUwt2yOdrP15AduEKwJFK4DmPj9ppJeaCO5itCaZ5dE1V8qfZOS1jtjwkd\nfE9MSorbbJFrxPpj1q9rs0SYonSL1v8Dt4o7gf4U6CwDmo1Wk+TwU7x18y1Yz4se\ny/XQKY3gGQKBgQC/DdNiYq3dHOOQyz77DypRexRHlaT/56oNkgEY20tW8yNNsCQs\ns9UGXYVGH6sdwFxqu2QXXYdSVD60JXiM1raHchmsrzjd35ES+3aci9aKIhnrEZvg\nsx7cu+6gYbn6RiF4GfYe0VTSTXhfQD9XR6ZeONJszEC0n5psCSf/UJuoxwKBgQCu\nYECqWqtQcb+HvN6FItkil4uscbNYLjkUTvsmYOcT1nATMJTRHISUAUyNmNzmLv8s\nT5823SjNcsj0Aqu36ZncPk1h91s5TUUiYRsnzTuVU/GIBQGpIYvHnJ4keNG8bBkG\n+yt4pjS4Owt50U2EHM7lk3rLB+9I5ATG8Vy59FT/aQKBgGU6+VhOQQJwAWLxlU6m\n5YHXm+C2qC/kTiwC0Wl7z3DGgJZsnMG22FYbUdHhkchMaYd9O/okwhY7ufjIKjgw\neZ8EqjYIlmIvffPELucRwbnX1Sf3KQM+Rnc7rrCwHY/r4Vx4ySbbD9owwSOwW/5M\n6a1YMiAQ29obA3J684BPtyD1\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-ft5ch@test-c30d2.iam.gserviceaccount.com",
  client_id: "116885885568960268978",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ft5ch%40test-c30d2.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
// Ensure that your Firebase service account key is stored as an environment variable
const serviceAccountKeyJson = FIREBASE_SERVICE_ACCOUNT_KEY;

if (!serviceAccountKeyJson) {
  throw new Error(
    "Firebase service account key is not set in environment variables",
  );
}

const serviceAccount = FIREBASE_SERVICE_ACCOUNT_KEY;

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();
export { adminDb };
