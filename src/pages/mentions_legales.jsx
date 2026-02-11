import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { BASE_URL, DEFAULT_IMAGE } from '../utils/useSEO';
import useSEO from '../utils/useSEO';

export default function MentionsLegalesPage() {
  useSEO({
    path: '/mentions-legales',
    title: 'Mentions légales & conditions générales Belgique | AquaDeb',
    description: "Mentions légales et conditions générales d'AquaDeb, plombier et débouchage en Belgique. Infos légales, entreprise BE 0758.402.022, contact 24/7.",
    ogImage: DEFAULT_IMAGE,
  });

  const legal = {
    denomination: "AquaDeb",
    forme: "Entreprise Individuelle",
    numero: "BE 0758.402.022",
    adresse: "Avenue Louise 209/7, 1050 Ixelles, Belgique",
    phone: "+32 493 41 52 83",
    email: "contact@debouchplomb24@gmail.com",
    hebergeur: {
      nom: "Vercel Inc.",
      adresse: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
    },
  };

  return (
    <div className="bg-white min-h-screen text-slate-900">
      <div className="bg-slate-950 text-white py-14">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-orange-400 font-bold uppercase text-sm mb-3">Informations légales</p>
          <h1 className="text-4xl font-black">Mentions légales & Conditions générales</h1>
          <p className="text-slate-300 mt-3">
            Transparence sur l’identité de l’entreprise, l’hébergement et les responsabilités liées à l’utilisation du site AquaDeb.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl py-12 space-y-10">
        <section id="mentions-legales" className="space-y-4">
          <h2 className="text-2xl font-black text-slate-900">Mentions légales</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
            <p className="font-semibold">1. Informations sur l'entreprise</p>
            <ul className="space-y-2 text-slate-700">
              <li><strong>Dénomination sociale :</strong> {legal.denomination}</li>
              <li><strong>Forme juridique :</strong> {legal.forme}</li>
              <li><strong>Numéro d’entreprise :</strong> {legal.numero}</li>
              <li><strong>Adresse du siège social :</strong> {legal.adresse}</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-600" /> <a className="text-orange-600 font-semibold" href={`tel:${legal.phone.replace(/[^0-9+]/g, '')}`}>{legal.phone}</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-600" /> <a className="text-orange-600 font-semibold" href={`mailto:${legal.email}`}>{legal.email}</a></li>
            </ul>

            <p className="font-semibold">2. Responsable de la publication</p>
            <p className="text-slate-700">Le responsable de la publication est le gérant de l’entreprise AquaDeb.</p>

            <p className="font-semibold">3. Hébergeur du site</p>
            <p className="text-slate-700">
              {legal.hebergeur.nom}, {legal.hebergeur.adresse}
            </p>

            <p className="font-semibold">4. Propriété intellectuelle</p>
            <p className="text-slate-700">
              L’ensemble des contenus du site AquaDeb (textes, images, logos, éléments graphiques) est protégé par le droit de la propriété intellectuelle.
              Toute reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable d’AquaDeb.
            </p>

            <p className="font-semibold">5. Limitation de responsabilité</p>
            <p className="text-slate-700">
              AquaDeb s’efforce de fournir des informations exactes et à jour. Toutefois, l’entreprise ne pourra être tenue responsable des omissions ou inexactitudes présentes sur le site.
              L’utilisateur reconnaît utiliser les informations sous sa seule responsabilité.
            </p>

            <p className="font-semibold">6. Droit applicable et juridiction compétente</p>
            <p className="text-slate-700">
              Les présentes mentions légales sont soumises au droit belge. Tout litige sera de la compétence exclusive des tribunaux belges.
            </p>
          </div>
        </section>

        <section id="conditions-generales" className="space-y-4">
          <h2 className="text-2xl font-black text-slate-900">Conditions générales</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm">
            <p className="text-slate-700">
              Les conditions générales encadrent l’utilisation du site et des services AquaDeb. En utilisant le site, l’utilisateur accepte ces conditions, le droit applicable et les éventuelles mises à jour publiées ici.
            </p>
            <p className="text-slate-700">
              Pour toute question ou demande liée aux conditions générales, merci de contacter AquaDeb via le formulaire de contact ou aux coordonnées ci-dessus.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-4 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-700 transition">
                <Mail className="w-4 h-4" /> Nous écrire
              </Link>
              <a href={`tel:${legal.phone.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 px-4 py-3 border border-orange-200 text-orange-700 font-semibold rounded-lg hover:bg-orange-50 transition">
                <Phone className="w-4 h-4" /> {legal.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
